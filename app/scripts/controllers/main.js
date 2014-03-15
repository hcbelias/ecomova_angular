define(['angular'], function (angular) {
  'use strict';
  angular.module('ecomovaJsApp.controllers.MainCtrl', ['ecomovaJsApp.services.Configuration'])
    .controller('MainCtrl', function ($scope) {
		debugger;
		$scope.submitEmail = function () {
			
			debugger;
			$http
				.post('/User/RegisterUser', JSON.stringify(data))
				.success(function(){
					debugger;
					/*success callback*/}
					
				);
		};

    });
});