var data = {
	chart1: {
		chart: {
			renderTo: 'chart1',
			type: 'column'
			},
		//Title of chart
		title: {
			text: 'Name of Agency'
		},
		//Key for the x-axis
		xAxis: {
			categories: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee']
		},
		yAxis: {
			title: {
				text: 'Responses'
			}
		},
		//Array of Objects - Each of the objects represent a choice (the key ), the values in there are the selections (the bars)
		series: [
		{
			name: 'CARE International',
			data: [1]
		}, 
		{
			name: 'World Vision International',
			data: [4]
		},
		{
			name: 'Save the Children',
			data: [5]
		},
		{
			name: 'Catholic Relief Services',
			data: [3]
		},
		{
			name: 'Mercy Corps',
			data: [1]
		},
		{
			name: 'Oxfam GB',
			data: [8]
		},
		{
			name: 'International Rescue Committee',
			data: [2]
		}
		],
		questionData: {
			name: 'Name of agency?',
			choices: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee'],
			responses: [{
				name: 'CARE International',
				count: 1
			},
			{
				name: 'World Vision International',
				count: 4
			},
			{
				name: 'CARE International',
				count: 5
			},
			{
				name: 'Save the Children',
				count: 3
			},
			{
				name: 'Catholic Relief Services',
				count: 1
			},
			{
				name: 'Mercy Corps',
				count: 8
			},
			{
				name: 'International Rescue Committee',
				count: 2
			}],
			answeredQuestions: 6,
			skippedQuestions: 0
		}
	},
	chart2: {
			chart: {
				renderTo: 'chart2',
				type: 'pie'
			},
			title: {
				text: 'Consortium country or region'
			},
			xAxis: {
				categories: ['Bangladesh', 'Bolivia', 'Horn of Africa', 'Indonesia', 'Niger']
			},
			yAxis: {
			title: {
			   text: 'Responses'
			}
		},
		series: [{
			type: 'pie',
			name: 'Consortium country / region',
			data: [
			['Bangladesh', 5],
			['Bolivia', 4],
			['Horn of Africa', 1],
			['Indonesia', 6],
			['Niger', 6]
			]
		}],
		questionData: {
			name: 'Consortium country / region?',
			choices: ['Bangladesh', 'Bolivia', 'Horn of Africa', 'Indonesia', 'Niger'],
			responses: [{
				name: 'Bangladesh',
				count: 5
			},
			{
				name: 'Bolivia',
				count: 4
			},
			{
				name: 'Horn of Africa',
				count: 1
			},
			{
				name: 'Indonesia',
				count: 6
			},
			{
				name: 'Niger',
				count: 6
			}
			],
			answeredQuestions: 6,
			skippedQuestions: 0
		}
	},
	chart3: {
			//chart: {
			//renderTo: 'chart3',
			//type: 'bar'
			//},
			title: {
			text: 'Name of organisational department or division completing the survey'
			},
			xAxis: {
			categories: ['Emergency Response and Preparedness', 'Emergency Response and Preparedness', 'Emergency Group', 'Humanitarian department', 'Emergencies Unit', 'PROGRAMME & Unité  Suivi Evaluation', 'Emergency Department', 'Emergency Department', 'SAN/DRR/RU', 'SAN/DRR/RU', 'Program Coordination Unit', 'Program Coordination Unit', 'Indonesia Response Team', 'Indonesia Response Team', 'Departement Reduction des Risques et Reponses aux urgences', 'Urgence', 'Programa de Gestión d Rieso y Adaptación', 'Programa de Gestión d Rieso y Adaptación', 'CRS BOLIVIA', 'CRS BOLIVIA', 'Emergency Response Team', 'emergency', 'WORLD VISION NIGER', 'Senior Management Team', 'Humanitarian & Emergency Affairs (HEA)', 'Risk Reduction and Response Unit', 'Humanitarian and Emergency Affairs', 'Country Management', 'Program Design and Quality Unit']
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
		}],
		questionData: {
			name: 'Name of organisational department or division completing the survey (e.g. Emergency Dept, Risk Reduction Dept, etc.)',
			choices: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee'],
			responses: [{
				name: 'CARE International',
				count: 3
			},
			{
				name: 'World Vision International',
				count: 4
			},
			{
				name: 'CARE International',
				count: 1
			},
			{
				name: 'Save the Children',
				count: 2
			},
			{
				name: 'Catholic Relief Services',
				count: 8
			},
			{
				name: 'Mercy Corps',
				count: 9
			},
			{
				name: 'International Rescue Committee',
				count: 10
			}],
			answeredQuestions: 6,
			skippedQuestions: 0
		}
	},
	chart4: {
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
		}],
		questionData: {
			name: 'Number of staff participating in the survey.',
			choices: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee'],
			responses: [{
				name: 'CARE International',
				count: 0
			},
			{
				name: 'World Vision International',
				count: 8
			},
			{
				name: 'CARE International',
				count: 3
			},
			{
				name: 'Save the Children',
				count: 2
			},
			{
				name: 'Catholic Relief Services',
				count: 5
			},
			{
				name: 'Mercy Corps',
				count: 10
			},
			{
				name: 'International Rescue Committee',
				count: 2
			}],
			answeredQuestions: 6,
			skippedQuestions: 0
		}
	},
	chart5: {
		chart: {
			renderTo: 'chart5',
			type: 'column'
			},
		title: {
			text: 'Fruit Consumption'
		},
		//expects an array of text
		xAxis: {
			categories: ['Apples', 'Bananas', 'Oranges']
		},
		yAxis: {
			title: {
				text: 'Fruit eaten'
			}
		},
		//expects an array of objects
		series: [{
			name: 'Jane',
			data: [1, 0, 4]
		}, 
		{
			name: 'John',
			data: [5, 7, 3]
		}],
		questionData: {
			name: 'Name of agency?',
			choices: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee'],
			responses: [{
				name: 'CARE International',
				count: 2
			},
			{
				name: 'World Vision International',
				count: 6
			},
			{
				name: 'CARE International',
				count: 7
			},
			{
				name: 'Save the Children',
				count: 1
			},
			{
				name: 'Catholic Relief Services',
				count: 4
			},
			{
				name: 'Mercy Corps',
				count: 2
			},
			{
				name: 'International Rescue Committee',
				count: 3
			}],
			answeredQuestions: 6,
			skippedQuestions: 0
		}
	},
	chart6: {
			chart: {
			renderTo: 'chart6',
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
		}],
		questionData: {
			name: 'Consortium country / region?',
			choices: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee'],
			responses: [{
				name: 'CARE International',
				count: 3
			},
			{
				name: 'World Vision International',
				count: 5
			},
			{
				name: 'CARE International',
				count: 2
			},
			{
				name: 'Save the Children',
				count: 1
			},
			{
				name: 'Catholic Relief Services',
				count: 1
			},
			{
				name: 'Mercy Corps',
				count: 9
			},
			{
				name: 'International Rescue Committee',
				count: 0
			}],
			answeredQuestions: 6,
			skippedQuestions: 0,
			responseCount: 6
		}
	},
	chart7: {
			chart: {
			renderTo: 'chart7',
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
		}],
		questionData: {
			name: 'Name of organisational department or division completing the survey (e.g. Emergency Dept, Risk Reduction Dept, etc.)',
			choices: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee'],
			responses: [{
				name: 'CARE International',
				count: 3
			},
			{
				name: 'World Vision International',
				count: 9
			},
			{
				name: 'CARE International',
				count: 4
			},
			{
				name: 'Save the Children',
				count: 2
			},
			{
				name: 'Catholic Relief Services',
				count: 1
			},
			{
				name: 'Mercy Corps',
				count: 0
			},
			{
				name: 'International Rescue Committee',
				count: 2
			}],
			answeredQuestions: 6,
			skippedQuestions: 0
		}
	},
	chart8: {
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
		}],
		questionData: {
			name: 'Number of staff participating in the survey.',
			choices: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee'],
			responses: [{
				name: 'CARE International',
				count: 11
			},
			{
				name: 'World Vision International',
				count: 2
			},
			{
				name: 'CARE International',
				count: 5
			},
			{
				name: 'Save the Children',
				count: 8
			},
			{
				name: 'Catholic Relief Services',
				count: 3
			},
			{
				name: 'Mercy Corps',
				count: 7
			},
			{
				name: 'International Rescue Committee',
				count: 2
			}],
			answeredQuestions: 6,
			skippedQuestions: 0
		}
	},
	chart9: {
		chart: {
			renderTo: 'chart9',
			type: 'column'
			},
		title: {
			text: 'Fruit Consumption'
		},
		//expects an array of text
		xAxis: {
			categories: ['Apples', 'Bananas', 'Oranges']
		},
		yAxis: {
			title: {
				text: 'Fruit eaten'
			}
		},
		//expects an array of objects
		series: [{
			name: 'Jane',
			data: [1, 0, 4]
		}, 
		{
			name: 'John',
			data: [5, 7, 3]
		}],
		questionData: {
			name: 'Name of agency?',
			choices: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee'],
			responses: [{
				name: 'CARE International',
				count: 4
			},
			{
				name: 'World Vision International',
				count: 2
			},
			{
				name: 'CARE International',
				count: 1
			},
			{
				name: 'Save the Children',
				count: 7
			},
			{
				name: 'Catholic Relief Services',
				count: 3
			},
			{
				name: 'Mercy Corps',
				count: 8
			},
			{
				name: 'International Rescue Committee',
				count: 1
			}],
			answeredQuestions: 6,
			skippedQuestions: 0
		}
	},
	chart10: {
			chart: {
			renderTo: 'chart10',
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
		}],
		questionData: {
			name: 'Consortium country / region?',
			choices: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee'],
			responses: [{
				name: 'CARE International',
				count: 2
			},
			{
				name: 'World Vision International',
				count: 7
			},
			{
				name: 'CARE International',
				count: 8
			},
			{
				name: 'Save the Children',
				count: 1
			},
			{
				name: 'Catholic Relief Services',
				count: 3
			},
			{
				name: 'Mercy Corps',
				count: 12
			},
			{
				name: 'International Rescue Committee',
				count: 3
			}],
			answeredQuestions: 6,
			skippedQuestions: 0
		}
	},
	chart11: {
			chart: {
			renderTo: 'chart11',
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
		}],
		questionData: {
			name: 'Name of organisational department or division completing the survey (e.g. Emergency Dept, Risk Reduction Dept, etc.)',
			choices: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee'],
			responses: [{
				name: 'CARE International',
				count: 3
			},
			{
				name: 'World Vision International',
				count: 2
			},
			{
				name: 'CARE International',
				count: 9
			},
			{
				name: 'Save the Children',
				count: 11
			},
			{
				name: 'Catholic Relief Services',
				count: 4
			},
			{
				name: 'Mercy Corps',
				count: 3
			},
			{
				name: 'International Rescue Committee',
				count: 1
			}],
			answeredQuestions: 6,
			skippedQuestions: 0
		}
	},
	chart12: {
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
		}],
		questionData: {
			name: 'Number of staff participating in the survey.',
			choices: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee'],
			responses: [{
				name: 'CARE International',
				count: 4
			},
			{
				name: 'World Vision International',
				count: 2
			},
			{
				name: 'CARE International',
				count: 1
			},
			{
				name: 'Save the Children',
				count: 3
			},
			{
				name: 'Catholic Relief Services',
				count: 5
			},
			{
				name: 'Mercy Corps',
				count: 2
			},
			{
				name: 'International Rescue Committee',
				count: 3
			}],
			answeredQuestions: 6,
			skippedQuestions: 0
		}
	}
}; //ends data wrapper