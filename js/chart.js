$('document').ready(function(){
	//Chart Code ----------------------------------------------------
	if($('.chart').length > 0){
				var chart1; // globally available
				chart1 = new Highcharts.Chart({
						chart: {
						renderTo: 'chart1',
						type: 'column'
					},
						title: {
						text: 'Fruit Consumption'
						},
						xAxis: {
						categories: ['Apples', 'Bananas', 'Oranges']
						},
						yAxis: {
						title: {
						   text: 'Fruit eaten'
						}
					},
					series: [{
						name: 'Jane',
						data: [1, 0, 4]
					}, 
					{
						name: 'John',
						data: [5, 7, 3]
					}]
				});

				var chart2; // globally available
				chart2 = new Highcharts.Chart({
						chart: {
						renderTo: 'chart2',
						type: 'pie'
					},
						title: {
						text: 'Fruit Consumption'
						},
						xAxis: {
						categories: ['Apples', 'Bananas', 'Oranges']
						},
						yAxis: {
						title: {
						   text: 'Fruit eaten'
						}
					},
					series: [{
						name: 'Jane',
						data: [1, 0, 4]
					}, 
					{
						name: 'John',
						data: [5, 7, 3]
					}]
				});

				var chart3; // globally available
				chart3 = new Highcharts.Chart({
						chart: {
						renderTo: 'chart3',
						type: 'line'
					},
						title: {
						text: 'Fruit Consumption'
						},
						xAxis: {
						categories: ['Apples', 'Bananas', 'Oranges']
						},
						yAxis: {
						title: {
						   text: 'Fruit eaten'
						}
					},
					series: [{
						name: 'Jane',
						data: [1, 0, 4]
					}, 
					{
						name: 'John',
						data: [5, 7, 3]
					}]
				});

				var chart4; // globally available
				chart4 = new Highcharts.Chart({
						chart: {
						renderTo: 'chart4',
						type: 'bar'
					},
						title: {
						text: 'Fruit Consumption'
						},
						xAxis: {
						categories: ['Apples', 'Bananas', 'Oranges']
						},
						yAxis: {
						title: {
						   text: 'Fruit eaten'
						}
					},
					series: [{
						name: 'Jane',
						data: [1, 0, 4]
					}, 
					{
						name: 'John',
						data: [5, 7, 3]
					}]
				});

				var chart5; // globally available
				chart5 = new Highcharts.Chart({
						chart: {
						renderTo: 'chart5',
						type: 'bar'
					},
						title: {
						text: 'Fruit Consumption'
						},
						xAxis: {
						categories: ['Apples', 'Bananas', 'Oranges']
						},
						yAxis: {
						title: {
						   text: 'Fruit eaten'
						}
					},
					series: [{
						name: 'Jane',
						data: [1, 0, 4]
					}, 
					{
						name: 'John',
						data: [5, 7, 3]
					}]
				});

				var chart6; // globally available
				chart6 = new Highcharts.Chart({
						chart: {
						renderTo: 'chart6',
						type: 'bar'
					},
						title: {
						text: 'Fruit Consumption'
						},
						xAxis: {
						categories: ['Apples', 'Bananas', 'Oranges']
						},
						yAxis: {
						title: {
						   text: 'Fruit eaten'
						}
					},
					series: [{
						name: 'Jane',
						data: [1, 0, 4]
					}, 
					{
						name: 'John',
						data: [5, 7, 3]
					}]
				});

				var chart7; // globally available
				chart7 = new Highcharts.Chart({
						chart: {
						renderTo: 'chart7',
						type: 'bar'
					},
						title: {
						text: 'Fruit Consumption'
						},
						xAxis: {
						categories: ['Apples', 'Bananas', 'Oranges']
						},
						yAxis: {
						title: {
						   text: 'Fruit eaten'
						}
					},
					series: [{
						name: 'Jane',
						data: [1, 0, 4]
					}, 
					{
						name: 'John',
						data: [5, 7, 3]
					}]
				});

				var chart8; // globally available
				chart8 = new Highcharts.Chart({
						chart: {
						renderTo: 'chart8',
						type: 'bar'
					},
						title: {
						text: 'Fruit Consumption'
						},
						xAxis: {
						categories: ['Apples', 'Bananas', 'Oranges']
						},
						yAxis: {
						title: {
						   text: 'Fruit eaten'
						}
					},
					series: [{
						name: 'Jane',
						data: [1, 0, 4]
					}, 
					{
						name: 'John',
						data: [5, 7, 3]
					}]
				});

				var chart9; // globally available
				chart9 = new Highcharts.Chart({
						chart: {
						renderTo: 'chart9',
						type: 'bar'
					},
						title: {
						text: 'Fruit Consumption'
						},
						xAxis: {
						categories: ['Apples', 'Bananas', 'Oranges']
						},
						yAxis: {
						title: {
						   text: 'Fruit eaten'
						}
					},
					series: [{
						name: 'Jane',
						data: [1, 0, 4]
					}, 
					{
						name: 'John',
						data: [5, 7, 3]
					}]
				});

				var chart10; // globally available
				chart10 = new Highcharts.Chart({
						chart: {
						renderTo: 'chart10',
						type: 'bar'
					},
						title: {
						text: 'Fruit Consumption'
						},
						xAxis: {
						categories: ['Apples', 'Bananas', 'Oranges']
						},
						yAxis: {
						title: {
						   text: 'Fruit eaten'
						}
					},
					series: [{
						name: 'Jane',
						data: [1, 0, 4]
					}, 
					{
						name: 'John',
						data: [5, 7, 3]
					}]
				});

				var chart11; // globally available
				chart11 = new Highcharts.Chart({
						chart: {
						renderTo: 'chart11',
						type: 'bar'
					},
						title: {
						text: 'Fruit Consumption'
						},
						xAxis: {
						categories: ['Apples', 'Bananas', 'Oranges']
						},
						yAxis: {
						title: {
						   text: 'Fruit eaten'
						}
					},
					series: [{
						name: 'Jane',
						data: [1, 0, 4]
					}, 
					{
						name: 'John',
						data: [5, 7, 3]
					}]
				});

				var chart12; // globally available
				chart12 = new Highcharts.Chart({
						chart: {
						renderTo: 'chart12',
						type: 'bar'
					},
						title: {
						text: 'Fruit Consumption'
						},
						xAxis: {
						categories: ['Apples', 'Bananas', 'Oranges']
						},
						yAxis: {
						title: {
						   text: 'Fruit eaten'
						}
					},
					series: [{
						name: 'Jane',
						data: [1, 0, 4]
					}, 
					{
						name: 'John',
						data: [5, 7, 3]
					}]
				});

	} //close chart check

	//#questions div is visibility hidden by default
	$('#questions').hide().css('visibility', 'visible');
});