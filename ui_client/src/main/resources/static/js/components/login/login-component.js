//Creacion componente 'loginComponent'.
(function() {
	'use strict';
	
	//Creacion del modulo que contendra el componente 'loginComponent', gestionado por el controlador 'loginController'.
	angular.module('loginComponent', ['loginController'])
		.component('loginComponent', {
			templateUrl:  './js/components/login/login-component.html',
			controller:	  'loginController',
			controllerAs: 'mc'
		});
})();