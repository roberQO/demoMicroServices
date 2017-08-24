//Creacion componente 'paginaPrincipalComponent'.
(function () {
	'use strict';
	
	//Creacion del modulo que contendra el componente 'paginaPrincipalComponent', gestionado por el controlador 'paginaPrincipalController'.
	angular.module('paginaPrincipalComponent', ['paginaPrincipalController'])
		.component('paginaPrincipalComponent', {
			templateUrl:  './js/components/pagina-principal/pagina-principal-component.html',
			controller:	  'paginaPrincipalController',
			controllerAs: 'mc'
		});
})();