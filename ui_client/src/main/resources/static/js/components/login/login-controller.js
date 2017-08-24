(function() {
	'use strict';
		
	//Creacion del controlador 'loginController'.
	angular.module('loginController',[])
		.controller('loginController',loginController);
	
	//Injectamos las dependecias que necesita el controlador.
	loginController.$inject = [];
	function loginController(){		
		var mc = this;
		
		mc.username;
		mc.password;
		mc.dataLoading;
	}
	
	function login(){
		
	}
})();