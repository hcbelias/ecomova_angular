/*jshint unused: vars */
define(['angular', 'controllers/main']/*deps*/, function (angular)/*invoke*/ {
  'use strict';
  var app = angular.module('ecomovaJsApp',[
    'ecomovaJsApp.controllers.MainCtrl',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
    'pascalprecht.translate'
  ]);
  app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        })
        .otherwise({
          redirectTo: '/'
        });
    });





  return app;
});
