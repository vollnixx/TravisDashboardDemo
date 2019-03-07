  SimpleILIASDashboard = (function (scope) {
  'use strict';
  let pub = {};


  pub.replaceLoaderSymbolForPHPUnitCard = function (card_id, state) {
    let card_object = $('#' + card_id)

    if(state === "failed") {
      card_object.find('.card-header h6').html(card_object.find('.card-header h6').html() + '<span class="badge badge-pill badge-danger">Danger</span>');
    }
    card_object.find('.phpunit').removeClass("phpunit");
    card_object.find(".row").removeClass("hidden");
  };

  return pub;

}());

$('.card-header').find('.badge-danger').remove();

let first = setInterval(function(){ 
  SimpleILIASDashboard.replaceLoaderSymbolForPHPUnitCard("php7_1_card", "failed");
  clearInterval(first);
}, 1000);

let second = setInterval(function(){ 
  SimpleILIASDashboard.replaceLoaderSymbolForPHPUnitCard("php7_0_card");
  clearInterval(second);
}, 1300);

let third = setInterval(function(){ 
  SimpleILIASDashboard.replaceLoaderSymbolForPHPUnitCard("php7_2_card");
  clearInterval(third);
}, 2000);