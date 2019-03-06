#!/bin/bash
if [ $# -eq 18 ]; then
    PHPUNIT_LABELS='labels: ["Warnings", "Skipped", "Incomplete"],'
    PHPUNIT_TYPE='type: "doughnut",'
	PHPUNIT_COLORS="\t\t\tbackgroundColor: ['#74B85D', '#92C780', '#BBDCAF', '#D8EBD2'],\n\t\t\thoverBackgroundColor: ['#5B854D','#5B854D','#5B854D','#5B854D'],\n\t\t\thoverBorderColor: 'rgba(234, 236, 244, 1)',"
	PHPUNIT_COLORS_FAIL="\t\t\tbackgroundColor: ['#c7372b', '#e20201', '#f33a2f', '#fa6553'],\n\t\t\thoverBackgroundColor: ['#b52f28','#b52f28','#b52f28','#b52f28'],\n\t\t\thoverBorderColor: 'rgba(234, 236, 244, 1)',"
	PHPUNIT_OPTIONS="options: {elements: {center: {text: 'Tests: 5400',color: '#212529', fontStyle: 'Helvetica', sidePadding: 20 }}, maintainAspectRatio: false,\n\t\ttooltips: \n\t\t\t{backgroundColor: 'rgb(0,255,255)',\n\t\t\tbodyFontColor:'#858796',\n\t\t\tborderColor: '#dddfeb',\n\t\t\tborderWidth: 1,\n\t\t\txPadding: 15,\n\t\t\tyPadding: 15,\n\t\t\tdisplayColors: false,\n\t\t\tcaretPadding: 10,\n\t\t\tbodyFontFamily: 'sans-serif',},\n\t\t\tlegend: {display: false},\n\t\t\tcutoutPercentage: 60,},"

	sed "s/###LABELS###/$PHPUNIT_LABELS/g
		 s/###CHART_TYPE###/$PHPUNIT_TYPE/g
		 s/###COLORS###/$PHPUNIT_COLORS/g
		 s/###COLORS_FAIL###/$PHPUNIT_COLORS_FAIL/g
		 s/###OPTIONS###/$PHPUNIT_OPTIONS/g" js/chart-pie-demo_org.js > js/chart-pie-demo.js

	sed -i "s/###ILIAS_7.0###/data: [ ${2}, ${3}, ${4}],/
		 s/###ILIAS_7.1###/data: [${6}, ${7}, ${8}],/
		 s/###ILIAS_7.2###/data: [${10}, ${11}, ${12}],/"   js/chart-pie-demo.js
	
	sed "s/###DICTO_1###/${13}/
		 s/###DICTO_2###/${14}/
		 s/###DICTO_3###/${15}/
		 s/###DICTO_4###/${16}/
		 s/###DICTO_5###/${17}/
		 s/###DICTO_6###/${18}/" index.org.html > index.html 

	sed -i "s/###PHP_7.0_URL###/https\:\/\/heise.de/
			s/###PHP_7.1_URL###/https\:\/\/heise.de/
			s/###PHP_7.2_URL###/https\:\/\/heise.de/
			s/###ILIAS_7.0_WARNINGS###/${2}/
			s/###ILIAS_7.0_SKIPPED###/${3}/
			s/###ILIAS_7.0_INCOMPLETE###/${4}/
			s/###ILIAS_7.1_WARNINGS###/${6}/
			s/###ILIAS_7.1_SKIPPED###/${7}/
			s/###ILIAS_7.1_INCOMPLETE###/${8}/
			s/###ILIAS_7.2_WARNINGS###/${10}/
			s/###ILIAS_7.2_SKIPPED###/${11}/
			s/###ILIAS_7.2_INCOMPLETE###/${12}/"   index.html 

	sed -i "s/###ILIAS_7.0_Assertions###/${1}/ 
		 s/###ILIAS_7.1_Assertions###/${5}/ 
		 s/###ILIAS_7.2_Assertions###/${9}/"   index.html 

else
	echo "###################################################################################"
    echo "# Your command line needs exactly 15 arguments, please see README.md for details. #"
    echo "###################################################################################"
    exit 3;
fi




