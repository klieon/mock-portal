$('document').ready(function(){
	//Chart Code ----------------------------------------------------
	if($('.chart').length > 0){
				// globally available
				var charts = ['chart1', 'chart2', 'chart3', 'chart4', 'chart5', 'chart6', 'chart7', 'chart8', 'chart9', 'chart10', 'chart11', 'chart12']; 
				for(var i = 0; i < charts.length; i++){
					window.chart = charts[i];
					console.log(chart);
					chart = new Highcharts.Chart(data[chart]);
				}
	} //close chart check

	//#questions div is visibility hidden by default
	$('#questions').hide().css('visibility', 'visible');
});