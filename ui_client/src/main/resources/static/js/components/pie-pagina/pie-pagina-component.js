//Creacion componente 'piePaginaComponent'.
(function() {
	'use strict';
	
	//Creacion del modulo que contendra el componente 'piePaginaComponent', gestionado por el controlador 'piePaginaController'.
	angular.module('piePaginaComponent', ['piePaginaController'])
		.component('piePaginaComponent', {
			templateUrl:  './js/components/pie-pagina/pie-pagina-component.html',
			controller:   'piePaginaController',
			controllerAs: 'mc'
		});
})();