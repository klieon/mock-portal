//App Functions
function toggleForm(status){
	//console.log('toggleForm', status);
	var login = $('#login'),
		$login = $(login);
	//If they arent logged in show the form
	if(status != 'login') { 
		$login.fadeIn();
	//else if they are switch the state and login	 
	} else { 
		$login.fadeOut();
		switchState('log out');
	}
}
//If the pw is wrong throw an error, else log them out
function authenticate(){
	var usr_role = '';
	//Show or hide elements based on CONFIG.user.status
	var name = $('input#username').val(),
		pass = $('input#password').val();
		CONFIG.user.password = pass;
		switch(name){
			case 'root':
				usr_role = 0;
			break;
			case 'admin':
				usr_role = 1;
			break;
			case 'manager': 
				usr_role = 2;
			break;
			case 'user':
				usr_role = 3;
			break;
		}
		//If they're in the users file and they have a role to do what they are supposed to do then "log them in"
		if(name in USERS){
			if(USERS[name].role == usr_role) {
				CONFIG.user.username = name;
				CONFIG.user.role = usr_role;
				switchState('login');
			} else { 
				//This will only fire once you check against a pw
				error();
			}
		} else {
			if(CONFIG.user.username == "" || CONFIG.user.username == null){
				error();	
			} else {
				switchState('log out');
			}
		}
}
function login(){
 	// console.log('login');
 	clearErrors();
	$('#login').fadeOut('fast', function(){
		$('#survey1.chart', '#questions').css('visibility','visible').show();
		executePriveleges(CONFIG.user.username);
		CONFIG.user.status = 'login';
	});
}
function logout(){
	// console.log('logout');
	var $secret = $($('#questions, .priveleged'));
	$('.chart', '#questions').css('visibility', 'hidden');
	$secret.removeAttr('style').fadeOut('fast', function(){
		$('#login').fadeIn('fast', function(){
			CONFIG.user.status 	 = '';
			CONFIG.user.password = '';
			CONFIG.user.username = '';
		});
	});
}
function switchState(status){
	// console.log('switchState', status);
	var btn = $('#loginoutbtn a');						//cache the login button
	$(btn).toggleClass('loggedin');						//toggle the button status
	//Perform the set action
	switch(status){
		case 'login':
			var text = 'log out';
			$(btn).text(text);
			login();
		break;
		case 'log out':
			var text = 'login';
			$(btn).text(text);
			logout();
		break;
	}
}
function error(){
	console.log('error');
	$('.error').fadeIn();
}
function clearErrors(){
	$('.error').fadeOut();	
}
//Selects the option from the sidebar dropdown
function grabOption($this){
	$that = $this;
	var target = $that.text(),
		selection = $('select option:contains(' + target +  ')', '#survey_selection').attr('value');
		return selection;
}

function grabOption2($this){
	$that = $this;
	var target = $that.text(),
		selection = $('select option:contains(' + target +  ')', '#org_selection').attr('value');
		return selection;
}

//Accepts a role, builds the content of all the allowed modules that role is allowed to see.
function executePriveleges(role){
	//Build an array for each type of user: what each role is allowed to see.
	var target  = '', selector = '', context = '',
		root 	= { access: ['.priveleged', '#questions'], context: ['#sidebar','#body .inner']},
		admin 	= { access: ['.priveleged', '#questions'], context: ['#sidebar','#body .inner']},
		manager = { access: ['#questions','#questions .priveleged'], context: ['#sidebar','#body .inner']},
		user 	= { access: ['#questions','#questions .priveleged'], context: ['#sidebar','#body .inner']};
		
	switch(role){
		case 'root':
			target = root;
		break;
		case 'admin':
			target = admin;
		break;
		case 'manager':
			target = manager;
		break;
		case 'user':
			target = user;
		break;
	}
	$.each(target, function(index, val){
		if(index == 'access') {
			console.log('selector is: ', val);
			selector += val;
		} else {
			console.log('context is: ', val);
			context += val;
		}
	});
	console.log(selector, context);

	//Fade in the items from the selected role
	$(selector, context).fadeIn();
}

//Handles switching charts in the #body
function toggleChart(chart){
	//console.log('toggling chart', chart);
	var targets = $('#questions .chart, .priveleged', '#body');
	$(targets).removeAttr('style').css('width', '100%').fadeOut('fast',function(){
		var questions = $('#questions .question, #questions > div');
		$(questions).css('visibility', '');
		console.log($(chart, chart + '> div', '#questions'));
		$(chart).css('visibility','visible').fadeIn();
	});
}
function generateReports(target){
	console.log('generating reports');
}
function listUsers(target){
	var form  = '<form action="" method="post" id="list_users">';
		form += '<table width="100%" cellpadding="0" border="0" id="users">';
	var counter = 0;
		console.log(USERS);
		for(key in USERS){
			//label
			row = "<tr class='user-"+USERS[key].name;
			 	if(counter % 2 == 0){ row += " even"; } else { row += " odd"; }
				row += "'>";
				row += '<td><input type="checkbox" name="'+USERS[key].name+'"></td>'
				row += '<td>'+USERS[key].name+'</td>';
				row += '<td>'+key+'</td>';
				row += '<td>'+USERS[key].email+'</td>';
				row += '<td>'+USERS[key].active+'</td>';
			row += "</tr>";
			form += row;
			counter++;
		}
		form += '</table></form>';
	$(target).append(form);
}
//Toggles Generic Content in the #body .inner
function toggleContent(selector){
	//Implement whatever functionality is needed 
	switch(selector){
		case '#all_users':
			listUsers(selector);
		break;
		case '#raw_question_data':
			generateReports(selector);
		break;
	}
	$('#body .inner > div:visible').fadeOut('fast',function(){
		$(selector, '#body .inner').css('visibility','visible').fadeIn('fast');
	});
}
function striper(element, start){
	var el = '', parent = '';
	switch(typeof(element)){
		case 'table': 
				el = 'td';
			parent = 'tr';
		break;
		case 'ul':
			el = 'li';
		parent = 'ul';
		break;
	}
	if(parent == 'ul'){
		$(el+':first').addClass('first');
		$(el+':last').addClass('last');	
	} else if(parent == 'tr'){
		$(parent+':first').addClass('first');
		$(parent+':last').addClass('last');
	}
	
	$(el+':odd').after(start).addClass('odd');
}

function hasChart(obj){
	if(obj.hasOwnProperty('chart')){
		return true;
	} else {
		return false;
	}
}
function renderCharts(){
	if($('.chart').length > 0){
		// globally available
		var charts = ['chart1', 'chart2', 'chart3', 'chart4', 'chart5', 'chart6', 'chart7', 'chart8', 'chart9', 'chart10', 'chart11', 'chart12']; 
		for(var i = 0; i < charts.length; i++){
			//console.log('#'+charts[i], '<p>'+data[charts[i]].questionData.name+'</p>');
			window.chart = charts[i];
			if(hasChart(data[charts[i]])){
				chart = new Highcharts.Chart(data[chart]);
			}
			$('#'+charts[i]).before().prepend('<p>'+data[charts[i]].questionData.name+'</p>');
		}
		processTable(data);
	} //close chart check
}
function processTable(obj){
	console.log(obj);
	for(node in obj){
		//console.log(data[node].hasOwnProperty('chart'));
		var id = (!data[node].hasOwnProperty('chart')) ? node : false;
		renderTable(data[node], data[node].questionData, id);
	}
}
function calculateTotal(count, responses){
	var total = 0;
	for(var i = 0; i < count; i++){	
		total = total + responses[i].count;
	}
	return total;
}
function renderTable(obj, tableData, id){
	var chartClass = (typeof(id) == 'string') ? id : obj.chart["renderTo"];
		
	//if(hasChart(obj)) { chartClass = obj.chart["renderTo"] } else { chartClass = 'noChart' }
	var table = '', rows = '', choices = tableData.choices;
	var tableStart			= '<table width="100%" cellpadding="0" cellspacing="0" class="'+ chartClass +' stripes">',
		question_title		= '<tr class="question_title"><td>'+tableData.name+'</td></tr>',
		headings 			= '<tr class="headings"><td>Answer Options</td><td>Response Percent</td><td>Response</td></tr>';
		
		//Calculate the total number of responses
		var total = calculateTotal(choices.length, tableData.responses);

		//Calculate response rate and print the rows 
		for(var i = 0; i < choices.length; i++){
			var rate = ((tableData.responses[i].count / total) * 100).toPrecision(3);
				rows += '<tr class="response"><td>'+choices[i]+'</td>'+ '<td>' + rate +'%</td>' + '<td>'+ tableData.responses[i].count + '</td></tr>';
		}
		rows += '<tr class="total"><td></td><td>Total Responses</td>' + '<td>'+ total + '</td></tr>'
		table += tableStart + question_title + headings + rows + '</table>';
		$('#'+chartClass).after().append(table);
}
function resetAclForm(){
	$('#success', '#acl_controls').removeAttr('style').fadeOut();
	$('form, #user_controls', '#acl_controls').removeAttr('style');
}
function aclFormSuccess(){
	var timer = window.setTimeout(function(){
		console.log('in the timer callback');
		$('#acl_controls').animate({
			paddingTop: 0,
			height: 0
		}, 'fast', function(){
			$('#acl_controls').removeAttr('style');
			resetAclForm();
			window.clearTimeout(timer);
		});
	}, 2000);
}
//Implementation ------------------------------------------------------------------------------------------------------------------------------------------------
$('document').ready(function(){
	//Initialize:
	//Render the charts
	renderCharts();
	//striper(['#sidebar ul', '#questions question table']);
	
	//hide some stuff
	$('#questions .chart, #all_users, #raw_question_data', '#body .inner').css('visibility', 'hidden');
	$('#questions').hide().css('visibility', 'visible');

	//Add some dynamic classes to the sidebar ul
	$('#stats li:first', '#sidebar').addClass('first');
	$('#stats li:last', '#sidebar').addClass('last');

	//Mod The Sidebar
	if($('form.jqtransform', '#sidebar').length > 0){
		$('form.jqtransform', '#sidebar').jqTransform();
	}
	//Hide the initial items that are priviledged
	$('.priveleged','#sidebar, #header, #body .inner').hide();

	//Bind the login/logout button update & show Login 
	if($('#loginout', '#header').length > 0){
		$('#loginout a').on('click', function(event){
			event.preventDefault();
			toggleForm(CONFIG.user.status);
		});
	}
	//Trigger the login form to check the config object and log in the user
		$('#login input[type="submit"]').on('click', function(event){
			event.preventDefault();
			authenticate();
		});
	//Get the selection
	$('.jqTransformSelectWrapper ul li a', '#survey_selection').click(function(){ 
			var option = grabOption($(this));
			toggleChart(option);
	});
	
	 $('#link').on('click', function(){
 			var url = $("select#report").attr('value'); 
            console.log(url);
            toggleChart(url);
         return false;
      });
	//Sidebar controls
	$('#stats a, #admin_controls a', '#sidebar .priveleged').on('click', function(event){
		event.preventDefault();
		var selector = '#' + $(this).attr('href');
		toggleContent(selector);
	});
	//All users update
	$('a.acl_controls').on('click', function(e){
		e.preventDefault();
		console.log('click');
		$(this).prev().animate({
			height: '225',
			paddingTop: '10'
		});
	});
	$('#user_controls').on('click', function(event){
		event.preventDefault();
		$('form, #user_controls', '#acl_controls').fadeOut('fast', function(){
			$('#success', '#acl_controls').fadeIn('fast', aclFormSuccess());
		});
	})
});