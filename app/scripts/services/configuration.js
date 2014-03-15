define(['angular'], function (angular) {
  'use strict';

  angular.module('ecomovaJsApp.services.Configuration', [])
	.constant('servicesConfig', (function(){
		var protocol = "http://";
		return {
			carPoolService: protocol + "/carPoolService",
			userPlaceService: protocol + "/UserPlaceService",
			userService: protocol + "/UserService"			
		};
	}));
});
