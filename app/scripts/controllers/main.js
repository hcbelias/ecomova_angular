define(['angular'], function (angular) {
  'use strict';
  angular.module('ecomovaJsApp.controllers', [])
    .controller('MainCtrl', ['$scope', 'User', function ($scope, userService) {
		$scope.submitEmail = function () {
			userService.getUser(1)
				.success(function (custs) {
                    $scope.Email = custs.Name;

                    debugger;
                    userService.updateUser(custs);
                    userService.insertUser(custs);


				});
		};

    }]);
});