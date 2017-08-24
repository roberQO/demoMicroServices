//Creacion componente 'informesEpineComponent'.
(function() {
	'use strict';
	
	//Creacion del modulo que contendra el componente 'informesEpineComponent', gestionado por el controlador 'informesEpineController'.
	angular.module('informesEpineComponent', ['informesEpineController'])
		.component('informesEpineComponent', {
			templateUrl:  './js/components/informes-epine/informes-epine-component.html',
			controller:   'informesEpineController',
			controllerAs: 'mc'
		});
})();