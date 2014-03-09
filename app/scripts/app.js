/*jshint unused: vars */
define(['angular', 'controllers/main']/*deps*/, function (angular, MainCtrl)/*invoke*/ {
  'use strict';

  return angular.module('ecomovaAngularApp',[
    'ecomovaAngularApp.controllers.MainCtrl',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute'
  ])
    .config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });
});
