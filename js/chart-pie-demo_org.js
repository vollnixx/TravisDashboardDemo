
// Pie Chart 7.2
var ctx = document.getElementById("myPieChart");
var myPieChart = new Chart(ctx, {
  type: 'doughnut',
  data: {
    ###LABELS###
    datasets: [{
      ###1_ILIAS_7.2###//data: [34, 20, 20, 10],
      ###COLORS###
    }],
  },
###OPTIONS###
});

// Pie Chart 7.1
var ctx = document.getElementById("myPieChart2");
var myPieChart2 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    ###LABELS###
    datasets: [{
      ###1_ILIAS_7.1###//data: [50, 20, 20, 10],
      ###COLORS###
    }],
  },
###OPTIONS###
});


// Pie Chart 7.0
var ctx = document.getElementById("myPieChart3");
var myPieChart3 = new Chart(ctx, {
  type: 'doughnut',
  data: {
    ###LABELS###
    datasets: [{
      ###1_ILIAS_7.0###//data: [50, 20, 20, 10],
      ###COLORS###
    }],
  },
###OPTIONS###
});