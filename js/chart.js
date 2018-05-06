// Load google charts
google.charts.load('current', {'packages':['corechart']});
google.charts.setOnLoadCallback(drawChart);

// Draw the chart and set the chart values
function drawChart() {
var data = google.visualization.arrayToDataTable([
	  ['Laguange', 'Users'],
	  ['Python', 744058],
	  ['Ruby', 740610],
	  ['PHP', 478153],
	  ['C++', 330259]
]);

var options = {
	'title':'Grafik mengenai pengguna yang login selama 24 jam terakhir', 
	'width':"80%", 
	'height':"80%"
	};

var chart = new google.visualization.PieChart(document.getElementById('piechart'));
chart.draw(data, options);
}