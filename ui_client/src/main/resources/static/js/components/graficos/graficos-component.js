//Creacion componente 'graficosComponent'.
(function() {
	'use strict';
	
	//Creacion del modulo que contendra el componente 'graficosComponent', gestionado por el controlador 'graficosController'.
	angular.module('graficosComponent', ['graficosController'])
		.component('graficosComponent', {
			templateUrl:  './js/components/graficos/graficos-component.html',
			controller:   'graficosController',
			controllerAs: 'mc'
		});
})();