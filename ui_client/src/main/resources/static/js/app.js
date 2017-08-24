(function(){
	'use strict'; //Obliga a implementar el codigo js bajo el estandar ES6.
	
	//Creacion del modulo principal de la aplicacion y declaracion de sus dependencias:
	//'ngRoute': modulo que habilita el enrutamiento de URLs en la aplicacion.
	angular.module('epineApp',['cabeceraComponent',
							   'enlacesInteresComponent',
							   'graficosComponent',
							   'informacionEpineComponent',
							   'informesEpineComponent',
							   'loginComponent',
							   'piePaginaComponent',
							   'paginaInicioComponent',
							   'paginaPrincipalComponent',
							   'ngRoute'])	
	.config(config);
	
	//Injectamos el servicio de registro de URLs a Config.
	config.$inject = ['$routeProvider', '$locationProvider'];
	//Implementacion de la funcion 'config'.
	function config($routeProvider,$locationProvider){		
		
		//Asociamos al servicio de registro de URLs los distintos componentes/URLs.
		$routeProvider
			.when('/', {
				templateUrl:  './js/components/pagina-inicio/pagina-inicio-component.html',
				controller:	  'paginaInicioController'				
			})
			.when('/loginOk', {
				templateUrl:  './js/components/pagina-principal/pagina-principal-component.html',
				controller:	  'paginaPrincipalController'				
			});
			
		$routeProvider.otherwise({ rediredirectTo: '/'});
	}

})();