#!/bin/bash
if [ $# -gt 17 ]; then
    PHPUNIT_LABELS='labels: ["Assertions", "Warnings", "Skipped", "Incomplete"],'
    PHPUNIT_TYPE='type: "doughnut",'
	PHPUNIT_COLORS="\t\t\tbackgroundColor: ['#74B85D', '#92C780', '#BBDCAF', '#D8EBD2'],\n\t\t\thoverBackgroundColor: ['#5B854D','#5B854D','#5B854D','#5B854D'],\n\t\t\thoverBorderColor: 'rgba(234, 236, 244, 1)',"
	PHPUNIT_OPTIONS="options: { maintainAspectRatio: false,\n\t\ttooltips: \n\t\t\t{backgroundColor: 'rgb(0,255,255)',\n\t\t\tbodyFontColor:'#858796',\n\t\t\tborderColor: '#dddfeb',\n\t\t\tborderWidth: 1,\n\t\t\txPadding: 15,\n\t\t\tyPadding: 15,\n\t\t\tdisplayColors: false,\n\t\t\tcaretPadding: 10,\n\t\t\tbodyFontFamily: 'sans-serif',},\n\t\t\tlegend: {display: false},\n\t\t\tcutoutPercentage: 60,},"

	sed "s/###ILIAS_7.0###/data: [${1}, ${2}, ${3}, ${4}],/
		 s/###ILIAS_7.1###/data: [${5}, ${6}, ${7}, ${8}],/
		 s/###ILIAS_7.2###/data: [${9}, ${10}, ${11}, ${12}],/" js/chart-pie-demo_org.js > js/chart-pie-demo.js 

	sed -i "s/###LABELS###/$PHPUNIT_LABELS/g
			s/###CHART_TYPE###/$PHPUNIT_TYPE/g
			s/###COLORS###/$PHPUNIT_COLORS/g
			s/###OPTIONS###/$PHPUNIT_OPTIONS/g" js/chart-pie-demo.js 

	sed "s/###DICTO_1###/${13}/
		 s/###DICTO_2###/${14}/
		 s/###DICTO_3###/${15}/
		 s/###DICTO_4###/${16}/
		 s/###DICTO_5###/${17}/
		 s/###DICTO_6###/${18}/" index.org.html > index.html 
else
    echo "Your command line contains not enough arguments you need 18."
    exit 3;
fi




