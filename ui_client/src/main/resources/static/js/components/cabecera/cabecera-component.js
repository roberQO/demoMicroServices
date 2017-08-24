//Creacion componente 'cabeceraComponent'.
(function() {
	'use strict';
	
	//Creacion del modulo que contendra el componente 'cabeceraComponent', gestionado por el controlador 'cabeceraController'.
	angular.module('cabeceraComponent',['cabeceraController'])
		.component('cabeceraComponent', {
			templateUrl:  './js/components/cabecera/cabecera-component.html',
			controller:	  'cabeceraController',
			controllerAs: 'mc'			
		});
})();