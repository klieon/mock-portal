var data = {
	chart1: {
		chart: {
			renderTo: 'chart1',
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
			answeredQuestions: 6,
			skippedQuestions: 0,
			responseCount: 6
		}
	},
	chart2: {
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
		}],
		questionData: {
			name: 'Consortium country / region?',
			choices: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee'],
			answeredQuestions: 6,
			skippedQuestions: 0,
			responseCount: 6
		}
	},
	chart3: {
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
		}],
		questionData: {
			name: 'Name of organisational department or division completing the survey (e.g. Emergency Dept, Risk Reduction Dept, etc.)',
			choices: ['CARE International', 'World Vision International', 'Save the Children', 'Catholic Relief Services', 'Mercy Corps', 'Oxfam GB', 'International Rescue Committee'],
			answeredQuestions: 6,
			skippedQuestions: 0,
			responseCount: 6
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
			answeredQuestions: 6,
			skippedQuestions: 0,
			responseCount: 6
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
			answeredQuestions: 6,
			skippedQuestions: 0,
			responseCount: 6
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
			answeredQuestions: 6,
			skippedQuestions: 0,
			responseCount: 6
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
			answeredQuestions: 6,
			skippedQuestions: 0,
			responseCount: 6
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
			answeredQuestions: 6,
			skippedQuestions: 0,
			responseCount: 6
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
			answeredQuestions: 6,
			skippedQuestions: 0,
			responseCount: 6
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
			answeredQuestions: 6,
			skippedQuestions: 0,
			responseCount: 6
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
			answeredQuestions: 6,
			skippedQuestions: 0,
			responseCount: 6
		}
	}
} //ends data wrapper