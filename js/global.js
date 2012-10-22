//App Functions
function toggleLogin($this){	//logs in or logs out
	console.log('toggle login'); 
	var that = $this;
	$(that).toggleClass('loggedin');
	var text = ($(that).hasClass('loggedin')) ? 'logout' : 'login';
	$(that).text(text);
	(CONFIG.user.status == 'loggedout') ? $('#login').fadeIn() : logout();
}
function login(){
 	console.log('login');
 	clearErrors();
	$('#login').fadeOut('fast', function(){
		CONFIG.user.status = 'loggedin';
		$('#survey1.chart', '#questions').css('visibility','visible').show();
		$('.priveleged, #questions', '#sidebar, #header, #body').fadeIn();
	});
}
function logout(){
	console.log('logout');
	var $secret = $($('#questions, .priveleged'));
	$('.chart', '#questions').css('visibility', 'hidden');
	$secret.removeAttr('style').fadeOut('fast', function(){
		$('#login').fadeIn('fast', function(){
			CONFIG.user.status = 'loggedout';
			CONFIG.user.password = '';
			CONFIG.user.username = '';
		});
	});
}
function error(){
	console.log('error');
	$('.error').fadeIn();
}
function clearErrors(){
	$('.error').fadeOut();	
}
function authenticate(){
	console.log('Authenticating');
	CONFIG.user.status = ($('#loginout a', '#header').hasClass('loggedin')) ? 'loggedin' : 'loggedout';
	//Show or hide elements based on CONFIG.user.status
	var name = $('input#username').val(),
		pass = $('input#password').val();
		CONFIG.user.username = name;
		CONFIG.user.password = pass;
		
		switch(name){
			case 'admin':
				(pass == 'testpass') ? login() : error();
				break;	
			default: 
				error();
		}
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
	//Init
	(function(){
		$('.chart', '#questions').css('visibility', 'hidden');
		$('#stats li:first', '#sidebar').addClass('first');
		$('#stats li:last', '#sidebar').addClass('last');
	})();
	//Mod The Sidebar
	if($('form.jqtransform', '#sidebar').length > 0){
		$('form.jqtransform', '#sidebar').jqTransform();
	}
	$('.priveleged', '#sidebar, #header').hide();
	//Trigger the login/logout button update & show Login 
	if($('#loginout', '#header').length > 0){
		$('#loginout a').on('click', function(event){
			event.preventDefault();
			console.log('clicked');
			toggleLogin($(this));
		});
	}
	//Trigger the login form to check the config object and log in the user
		$('#login input[type="submit"]').on('click', function(event){
			console.log('form btn clicked');
			event.preventDefault();
			authenticate();
		});
	//Get the selection
	$('.jqTransformSelectWrapper ul li a').click(function(){ 
			var option = grabOption($(this));
			toggleChart(option);
	});
});