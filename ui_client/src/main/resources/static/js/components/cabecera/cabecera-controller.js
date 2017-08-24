//TODO: CabeceraController
(function() {
	'use strict';
		
	//Creacion del controlador 'cabeceraController'.
	angular.module('cabeceraController',[])
		.controller('cabeceraController',CabeceraController);
	
	//Injectamos las dependecias que necesita el controlador.
	CabeceraController.$inject = [];
	function CabeceraController(){	
		var mc = this;
		
		mc.is_principal = true; //TODO
		mc.nombre_hospital = "La Paz";
		mc.seccion = "Datos del Hospital";
		mc.fecha = new Date();
	}
	
})();