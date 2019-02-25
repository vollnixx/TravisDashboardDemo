#!/bin/bash
PHPUNIT_LABELS='labels: ["Assertions", "Warnings", "Skipped", "Incomplete"],'

PHPUNIT_COLORS="\t\t\tbackgroundColor: ['#74B85D', '#92C780', '#BBDCAF', '#D8EBD2'],\n\t\t\thoverBackgroundColor: ['#5B854D','#5B854D','#5B854D','#5B854D'],\n\t\t\thoverBorderColor: 'rgba(234, 236, 244, 1)',"

PHPUNIT_OPTIONS="options: { maintainAspectRatio: false,\n\t\ttooltips: \n\t\t\t{backgroundColor: 'rgb(0,255,255)',\n\t\t\tbodyFontColor:'#858796',\n\t\t\tborderColor: '#dddfeb',\n\t\t\tborderWidth: 1,\n\t\t\txPadding: 15,\n\t\t\tyPadding: 15,\n\t\t\tdisplayColors: false,\n\t\t\tcaretPadding: 10,\n\t\t\tbodyFontFamily: 'sans-serif',},\n\t\t\tlegend: {display: false},\n\t\t\tcutoutPercentage: 60,},"

sed '/###1_ILIAS_7.0###/c\\t\t data: [6366, 20, 20, 222],' chart-pie-demo_org.js > chart-pie-demo.js 
sed -i '/###1_ILIAS_7.1###/c\\t\t data: [4141, 20, 42334, 222],' chart-pie-demo.js 
sed -i '/###1_ILIAS_7.2###/c\\t\t data: [1231, 20, 123, 222],' chart-pie-demo.js 

sed -i "/###LABELS###/c\ $PHPUNIT_LABELS" chart-pie-demo.js
sed -i "/###COLORS###/c\ $PHPUNIT_COLORS" chart-pie-demo.js 
sed -i "/###OPTIONS###/c\ $PHPUNIT_OPTIONS" chart-pie-demo.js 



