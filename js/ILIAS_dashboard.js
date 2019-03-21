SimpleILIASDashboard = (function () {
  'use strict';
  let pub = {}, pri = {
    danger_span:   '<span class="badge badge-pill badge-danger">Danger</span>',
    html_snippets: {
      card_header:              '.card-header h6',
      phpunit_date_class:       '.phpunit_date',
      phpunit_state_html:       '<p class="mr-2"><i class="fas fa-circle',
      dicto_state_html:         '<span class=""><a class="badge badge-pill',
      card_header_html_begin:   '<div class="card-header py-3 d-flex flex-row align-items-center justify-content-between">'
    }
  };

  pub.createPHPUnitWidget = function (url, version, id, title, warn, skip, incomp, failure) {
    let failed = '';

    if (failure === "true") {
      failed = '-warning';
    }

    return '<a href="' + url + '" class="col-xl-4 col-lg-5" target="_blank"> ' +
            ' <div class="col-xl-12">' +
              ' <div class="card shadow mb-4" id="' + version + '_' + id + '_card">' +
                pri.html_snippets.card_header_html_begin +
                ' <h6>' + title + '</h6>' +
              ' </div>' +
              ' <div class="card-body phpunit">' +
                ' <div class="row hidden">' +
                  ' <div class="col-md-8">' +
                    ' <div class="chart-pie pt-6 pb-2">' +
                      ' <canvas id="' + id + '"></canvas>' +
                    ' </div>' +
                  ' </div>' +
                  ' <div class="col-md-4 ">' +
                    ' <div class="mt-4 text-left small ">' +
                      pri.html_snippets.phpunit_state_html + ' text-warnings' + failed + '"></i> ' + warn + ' Warnings </p>' +
                      pri.html_snippets.phpunit_state_html + ' text-skipped' + failed + '"></i> ' + skip + ' Skipped </p>' +
                      pri.html_snippets.phpunit_state_html + ' text-incomplete' + failed + '"></i> ' + incomp + ' Incomplete </p>' +
                    ' </div>' + 
                  ' </div>' +
                ' </div>' + 
              ' </div>' +
            ' </div>' + 
          ' </div>' +
        ' </a>' ;
  }

    pub.createDictoWidget = function (date, url, total, resolved, added) {

    return '<div class="col-xl-6 col-lg-6"> ' +
            '<div class="card shadow mb-4">' +
               pri.html_snippets.card_header_html_begin +
                '<h6>Dicto ' + date + '</h6>' +
              '</div>' +
              '<div class="card-body d-flex justify-content-between">' + 
                pri.html_snippets.dicto_state_html + ' badge-warning mr-2" href="#">' + total + ' Total</a> </span>' +
                pri.html_snippets.dicto_state_html + ' badge-success mr-2" href="#">' + resolved + ' Resolved</a> </span>' +
                pri.html_snippets.dicto_state_html + ' badge-danger mr-2" href="#">' + added + ' Added</a> </span>' +
              '</div>' +
            '</div>' +
          '</div>';
  };


 pub.initialiseGraph = function (card_id, card_object) {
   let card_cleaned_id = card_id.split("_card")[0];
   console.log(card_cleaned_id)
    card_object.append('    <script>$( document ).ready(function() {' +
        'let ctx = document.getElementById("php7.0");'+
        'let myPieChart = new Chart(ctx, {'+
        ' type: "doughnut", data: { labels: ["Warnings", "Skipped", "Incomplete"],'+
        '   datasets: [{data: [ 14, 13, 13], backgroundColor: ["#74B85D", "#92C780", "#BBDCAF", "#D8EBD2"], hoverBackgroundColor: ["#5B854D","#5B854D","#5B854D","#5B854D"], hoverBorderColor: "rgba(234, 236, 244, 1)",}],'+
        ' },'+
        ' options: {elements: {center: {text: "Tests: 54002",color: "#212529", fontStyle: "Helvetica", sidePadding: 20 }}, maintainAspectRatio: false,'+
        '   tooltips:{backgroundColor: "rgb(0,255,255)",bodyFontColor:"#858796",borderColor: "#dddfeb",borderWidth: 1,xPadding: 15,yPadding: 15,displayColors: false,caretPadding: 10,bodyFontFamily: "sans-serif",},'+
   '   legend: {display: false},cutoutPercentage: 60,},'+
   '});'+
        '});</script>');


  };

  pub.replaceLoaderSymbolForPHPUnitCard = function (card_id, failure) {
    let card_object = $('#' + card_id);
    let date_object = $(pri.html_snippets.phpunit_date_class);
    let today = new Date().toLocaleDateString();
      console.log(failure, pri.danger_span)
    if (failure === "true") {
      card_object.find(pri.html_snippets.card_header).html(
        card_object.find(pri.html_snippets.card_header).html() + pri.danger_span
      );

    }

    date_object.html('last run: ' + today);
    card_object.find('.phpunit').removeClass('phpunit');
    card_object.find('.row').removeClass('hidden');
    pub.initialiseGraph(card_id, card_object);
  };

  pub.createPHPUnitWidgets = function (data) {
    let allRows = data.split(/\r?\n|\r/);

    $('.card-header').find('.badge-danger').remove();

    for (let singleRow = 0; singleRow < allRows.length; singleRow++) {
      let cells = allRows[singleRow].split(',');
      let url = cells[0], version = 'ILIAS_' + cells[1], id = cells[2], 
          title = cells[3], warn = cells[4], skip = cells[5], incomp = cells[6], failure = cells[7];

      if( $('.phpunit_data').find('.' + version).length === 0) {
         $('.phpunit_data').append('<div class="' + version + ' col-md-12"><h4>' + version + '</h4></div>')
      }
      $('.phpunit_data .' + version).append(pub.createPHPUnitWidget(url, version, id, title, warn, skip, incomp, failure));

      let interval = setInterval(function () {
        SimpleILIASDashboard.replaceLoaderSymbolForPHPUnitCard(version + '_' + id + "_card", failure);
        
        clearInterval(interval);
      }, Math.random() * 1000);
    }
  };

    pub.createDictoWidgets = function (data) {
    let allRows = data.split(/\r?\n|\r/);

    for (let singleRow = 0; singleRow < allRows.length; singleRow++) {
      let cells = allRows[singleRow].split(',');
      $('.dicto-data').append(pub.createDictoWidget(cells[0], cells[1], cells[2], cells[3], cells[4]));
    }
  };

  pub.anErrorOccured = function(){
    location.reload();
  };

  pub.startPHPUnitDummySimulation = function () {

    $.ajax({
      url:      'data/phpunit_latest.csv',
      dataType: 'text',
    }).done(pub.createPHPUnitWidgets)
    .fail(function (jqXHR, textStatus, errorThrown) { setInterval(function () {
          pub.anErrorOccured();
      }, Math.random() * 5000); });
  };

    pub.startDictoDummySimulation = function () {

    $.ajax({
      url:      'data/dicto_latest.csv',
      dataType: 'text',
    }).done(pub.createDictoWidgets)
    .fail(function (jqXHR, textStatus, errorThrown) { setInterval(function () {
          pub.anErrorOccured();
      }, Math.random() * 5000); });
  };


  return pub;
  
  }());

$('.card-header').find('.badge-danger').remove();

SimpleILIASDashboard.startPHPUnitDummySimulation();
SimpleILIASDashboard.startDictoDummySimulation();