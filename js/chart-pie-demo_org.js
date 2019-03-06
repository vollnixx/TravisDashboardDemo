Chart.pluginService.register({
  beforeDraw: function (chart) {
    if (chart.config.options.elements.center) {
      //Get ctx from string
      var ctx = chart.chart.ctx;

// Pie Chart 7.0
      //Get options from the center object in options
      var centerConfig = chart.config.options.elements.center;
      var fontStyle = centerConfig.fontStyle || 'Arial';
      var txt = centerConfig.text;
      var color = centerConfig.color || '#000';
      var sidePadding = centerConfig.sidePadding || 20;
      var sidePaddingCalculated = (sidePadding / 100) * (chart.innerRadius * 2)
        //Start with a base font of 30px
      ctx.font = "30px " + fontStyle;

      //Get the width of the string and also the width of the element minus 10 to give it 5px side padding
      var stringWidth = ctx.measureText(txt).width;
      var elementWidth = (chart.innerRadius * 2) - sidePaddingCalculated;

      // Find out how much the font can grow in width.
      var widthRatio = elementWidth / stringWidth;
      var newFontSize = Math.floor(30 * widthRatio);
      var elementHeight = (chart.innerRadius * 2);

      // Pick a new font size so it will not be larger than the height of label.
      var fontSizeToUse = Math.min(newFontSize, elementHeight);

      //Set font settings to draw it correctly.
      ctx.textAlign = 'center';
      ctx.textBaseline = 'middle';
      var centerX = ((chart.chartArea.left + chart.chartArea.right) / 2);
      var centerY = ((chart.chartArea.top + chart.chartArea.bottom) / 2);
      ctx.font = fontSizeToUse + "px " + fontStyle;
      ctx.fillStyle = color;

      //Draw text in center
      ctx.fillText(txt, centerX, centerY);
    }
  }
});


// Pie Chart 7.0
var ctx = document.getElementById("php7.0");
var myPieChart = new Chart(ctx, {
  ###CHART_TYPE###
  data: {
    ###LABELS###
    datasets: [{
      ###ILIAS_7.0###
      ###COLORS###
    }],
  },
###OPTIONS###
});

// Pie Chart 7.1
var ctx = document.getElementById("php7.1");
var myPieChart2 = new Chart(ctx, {
  ###CHART_TYPE###
  data: {
    ###LABELS###
    datasets: [{
      ###ILIAS_7.1###
      ###COLORS_FAIL###
    }],
  },
###OPTIONS###
});


// Pie Chart 7.2
var ctx = document.getElementById("php7.2");
var myPieChart3 = new Chart(ctx, {
  ###CHART_TYPE###
  data: {
    ###LABELS###
    datasets: [{
      ###ILIAS_7.2###
      ###COLORS###
    }],
  },
###OPTIONS###
});