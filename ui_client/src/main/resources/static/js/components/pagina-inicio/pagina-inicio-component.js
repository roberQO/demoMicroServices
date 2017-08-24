//Creacion componente 'paginaInicioComponent'.
(function () {
	'use strict';
	
	//Creacion del modulo que contendra el componente 'paginaInicioComponent', gestionado por el controlador 'paginaInicioController'.
	angular.module('paginaInicioComponent', ['paginaInicioController'])
		.component('paginaInicioComponent', {
			templateUrl:  './js/components/pagina-inicio/pagina-inicio-component.html',
			controller:	  'paginaInicioController',
			controllerAs: 'mc'
		});
})();