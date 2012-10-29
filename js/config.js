//Config object for mock login
var CONFIG = function(module){
	module = {
		user: 
			{
				'username': '', //CONFIG.user.username
				'password': '',
				'role':'',
				'status': ''
			},
		roles: {
			0: 'root', //CONFIG.roles[0]
			1: 'admin',
			2: 'manager',
			3: 'user'
		}
	}	
	return module;
}(CONFIG || {});