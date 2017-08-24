//Creacion componente 'informacionEpineComponent'.
(function() {
	'use strict';
	
	//Creacion del modulo que contendra el componente 'informacionEpineComponent', gestionado por el controlador 'informacionEpineController'.
	angular.module('informacionEpineComponent', ['informacionEpineController'])
		.component('informacionEpineComponent', {
			templateUrl:  './js/components/informacion-epine/informacion-epine-component.html',
			controller:   'informacionEpineController',
			controllerAs: 'mc'
		});
})();