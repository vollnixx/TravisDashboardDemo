Chart.pluginService.register({
	beforeDraw: function (chart) {
		if (chart.config.options.elements.center) {
			//Get ctx from string
			var ctx = chart.chart.ctx;

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



// Pie Chart 7.2
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ["Assertions", "Warnings", "Skipped", "Icomplete"],
		datasets: [{
			data: [50, 20, 20, 10],
			backgroundColor: ['#74B85D', '#92C780', '#BBDCAF', '#D8EBD2'],
			hoverBackgroundColor: ['#5B854D', '#5B854D', '#5B854D', '#5B854D'],
			hoverBorderColor: "rgba(234, 236, 244, 1)",
		}],
	},
	options: {
		elements: {
			center: {
				text: 'Tests: 5400',
				color: '#212529', //Default black
				fontStyle: 'Helvetica', //Default Arial
				sidePadding: 20 //Default 20 (as a percentage)
			}
		},
		maintainAspectRatio: false,
		tooltips: {
			backgroundColor: "rgb(255,255,255)",
			bodyFontColor: "#858796",
			borderColor: '#dddfeb',
			borderWidth: 1,
			xPadding: 15,
			yPadding: 15,
			displayColors: false,
			caretPadding: 10,
			bodyFontFamily: "'Open Sans', sans-serif",
		},
		legend: {
			display: false,
		},
		cutoutPercentage: 60,
	},
});

// Pie Chart 7.1
var ctx = document.getElementById("myPieChart2");
var myPieChart2 = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ["Assertions", "Warnings", "Skipped", "Icomplete"],
		datasets: [{
			data: [50, 20, 20, 10],
			backgroundColor: ['#c7372b', '#e20201', '#f33a2f', '#fa6553'],
			hoverBackgroundColor: ['#b52f28', '#b52f28', '#b52f28', '#b52f28'],
			hoverBorderColor: "rgba(234, 236, 244, 1)",
		}],
	},
	options: {
		elements: {
			center: {
				text: 'Tests: 5400',
				color: '#212529', //Default black
				fontStyle: 'Helvetica', //Default Arial
				sidePadding: 20 //Default 20 (as a percentage)
			}
		},
		maintainAspectRatio: false,
		tooltips: {
			backgroundColor: "rgb(255,255,255)",
			bodyFontColor: "#858796",
			borderColor: '#dddfeb',
			borderWidth: 1,
			xPadding: 15,
			yPadding: 15,
			displayColors: false,
			caretPadding: 10,
			bodyFontFamily: "'Open Sans', sans-serif",
		},
		legend: {
			display: false
		},
		cutoutPercentage: 60,
	},
});


// Pie Chart 7.0
var ctx = document.getElementById("myPieChart3");
var myPieChart3 = new Chart(ctx, {
	type: 'doughnut',
	data: {
		labels: ["Assertions", "Warnings", "Skipped", "Icomplete"],
		datasets: [{
			data: [50, 20, 20, 10],
			backgroundColor: ['#74B85D', '#92C780', '#BBDCAF', '#D8EBD2'],
			hoverBackgroundColor: ['#5B854D', '#5B854D', '#5B854D', '#5B854D'],
			hoverBorderColor: "rgba(234, 236, 244, 1)",
		}],
	},
	options: {
		elements: {
			center: {
				text: 'Tests: 5400',
				color: '#212529', //Default black
				fontStyle: 'Helvetica', //Default Arial
				sidePadding: 20 //Default 20 (as a percentage)
			}
		},
		maintainAspectRatio: false,
		tooltips: {
			backgroundColor: "rgb(255,255,255)",
			bodyFontColor: "#858796",
			borderColor: '#dddfeb',
			borderWidth: 1,
			xPadding: 15,
			yPadding: 15,
			displayColors: false,
			caretPadding: 10,
			bodyFontFamily: "'Open Sans', sans-serif",
		},
		legend: {
			display: false
		},
		cutoutPercentage: 60,
	},
});
