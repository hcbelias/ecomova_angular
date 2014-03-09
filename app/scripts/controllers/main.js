define(['angular'], function (angular) {
  'use strict';

  angular.module('ecomovaAngularApp.controllers.MainCtrl', [])
    .controller('MainCtrl', function ($scope) {

        $scope.email = '';
        $scope.submitEmail = function () {
          $scope.email.push($scope.email);
        };

    });
});