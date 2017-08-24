//TODO: PiePaginaController
(function (){
	'use strict';
	
	//Creacion del controlador 'piePaginaController'.
	angular.module('piePaginaController',[])
		.controller('piePaginaController', piePaginaController);
		
		//Injectamos las dependecias que necesita el controlador.
		piePaginaController.$inject = [];
		function piePaginaController(){			
			var mc = this;
			
			mc.is_principal = true;
			mc.email = "rmadrigal@qualityobjects.com";
			mc.version = "1.0v";
		}
})();