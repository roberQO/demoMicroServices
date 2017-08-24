//Creacion componente 'enlacesInteresComponent'.
(function() {
	'use strict';
	
	//Creacion del modulo que contendra el componente 'enlacesInteresComponent', gestionado por el controlador 'EnlacesInteresController'.
	angular.module('enlacesInteresComponent', ['enlacesInteresController'])
		.component('enlacesInteresComponent', {
			templateUrl:  './js/components/enlaces-interes/enlaces-interes-component.html',
			controller:   'enlacesInteresController',
			controllerAs: 'mc'
		});
})();