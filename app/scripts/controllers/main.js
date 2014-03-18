define(['angular'], function (angular) {
  'use strict';
  angular.module('ecomovaJsApp.controllers', [])
    .controller('MainCtrl', ['$scope', 'User', function ($scope, userService) {
		debugger;
		$scope.submitEmail = function () {
			debugger;
			userService.getUser(1)
				.success(function (custs) {
				debugger;
					$scope.customers = custs;
				})
				.error(function (error) {
				debugger;
					$scope.status = 'Unable to load customer data: ' + error.message;
				});
		};

    }]);
});