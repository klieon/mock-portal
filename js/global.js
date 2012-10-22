//App Functions
function toggleForm(status){
	console.log('toggleForm', status);
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
	console.log('Authenticating');
	//Show or hide elements based on CONFIG.user.status
	var name = $('input#username').val(),
		pass = $('input#password').val();
		CONFIG.user.username = name;
		CONFIG.user.password = pass;
		
		switch(name){
			case 'admin':
				(pass == 'testpass') ? switchState('login') : error();
			break;	
			default: 
				switchState('log out');
		}
}
function login(){
 	console.log('login');
 	clearErrors();
	$('#login').fadeOut('fast', function(){
		$('#survey1.chart', '#questions').css('visibility','visible').show();
		$('.priveleged, #questions', '#sidebar, #header, #body').fadeIn();
		CONFIG.user.status = 'login';
	});
}
function logout(){
	console.log('logout');
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
	console.log('switchState', status);
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
function makeSelection(){
	//console.log('im a selection');
}
function grabOption($this){
	//console.log('grabbing option');
	$that = $this;
	var target = $that.text(),
		selection = $('select option:contains(' + target +  ')', '#survey_selection').attr('value');
		return selection;
}
function toggleChart(chart){
	console.log('toggling chart', chart);
	$('.chart:visible', '#questions').fadeOut('fast',function(){
		$(chart, '#questions').css('visibility','visible').fadeIn();
	});
}
//Implementation ------------------------------------------------------------------------------------------------------------------------------------------------
$('document').ready(function(){
	//Init -- hide some stuff and add some dynamic classes to the sidebar ul
	(function(){
		$('.chart', '#questions').css('visibility', 'hidden');
		$('#stats li:first', '#sidebar').addClass('first');
		$('#stats li:last', '#sidebar').addClass('last');

		//Mod The Sidebar
		if($('form.jqtransform', '#sidebar').length > 0){
			$('form.jqtransform', '#sidebar').jqTransform();
		}
		$('.priveleged', '#sidebar, #header').hide();
	})();
	//Trigger the login/logout button update & show Login 
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
	$('.jqTransformSelectWrapper ul li a').click(function(){ 
			var option = grabOption($(this));
			toggleChart(option);
	});
});