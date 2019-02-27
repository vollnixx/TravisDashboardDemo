
// Pie Chart 7.2
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Assertions", "Warnings", "Skipped", "Incomplete"],
    datasets: [{
      data: [12332, 52134, 52134, 32112],
      			backgroundColor: ['#74B85D', '#92C780', '#BBDCAF', '#D8EBD2'],
			hoverBackgroundColor: ['#5B854D','#5B854D','#5B854D','#5B854D'],
			hoverBorderColor: 'rgba(234, 236, 244, 1)',
    }],
  },
options: { maintainAspectRatio: false,
		tooltips: 
			{backgroundColor: 'rgb(0,255,255)',
			bodyFontColor:'#858796',
			borderColor: '#dddfeb',
			borderWidth: 1,
			xPadding: 15,
			yPadding: 15,
			displayColors: false,
			caretPadding: 10,
			bodyFontFamily: 'sans-serif',},
			legend: {display: false},
			cutoutPercentage: 60,},
});

// Pie Chart 7.1
var ctx = document.getElementById("myPieChart2");
var myPieChart2 = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Assertions", "Warnings", "Skipped", "Incomplete"],
    datasets: [{
      data: [21, 21, 23, 43],
      			backgroundColor: ['#74B85D', '#92C780', '#BBDCAF', '#D8EBD2'],
			hoverBackgroundColor: ['#5B854D','#5B854D','#5B854D','#5B854D'],
			hoverBorderColor: 'rgba(234, 236, 244, 1)',
    }],
  },
options: { maintainAspectRatio: false,
		tooltips: 
			{backgroundColor: 'rgb(0,255,255)',
			bodyFontColor:'#858796',
			borderColor: '#dddfeb',
			borderWidth: 1,
			xPadding: 15,
			yPadding: 15,
			displayColors: false,
			caretPadding: 10,
			bodyFontFamily: 'sans-serif',},
			legend: {display: false},
			cutoutPercentage: 60,},
});


// Pie Chart 7.0
var ctx = document.getElementById("myPieChart3");
var myPieChart3 = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: ["Assertions", "Warnings", "Skipped", "Incomplete"],
    datasets: [{
      data: [24, 42, 21, 22],
      			backgroundColor: ['#74B85D', '#92C780', '#BBDCAF', '#D8EBD2'],
			hoverBackgroundColor: ['#5B854D','#5B854D','#5B854D','#5B854D'],
			hoverBorderColor: 'rgba(234, 236, 244, 1)',
    }],
  },
options: { maintainAspectRatio: false,
		tooltips: 
			{backgroundColor: 'rgb(0,255,255)',
			bodyFontColor:'#858796',
			borderColor: '#dddfeb',
			borderWidth: 1,
			xPadding: 15,
			yPadding: 15,
			displayColors: false,
			caretPadding: 10,
			bodyFontFamily: 'sans-serif',},
			legend: {display: false},
			cutoutPercentage: 60,},
});