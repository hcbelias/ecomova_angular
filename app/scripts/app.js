/*jshint unused: vars */
define(['angular', 'angularTranslate', 'controllers/main', 'services/user']/*deps*/, function (angular)/*invoke*/ {
  'use strict';

  //DEP
  var app = angular.module('ecomovaJsApp',[
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
	'pascalprecht.translate',
    'ecomovaJsApp.controllers',
    'ecomovaJsApp.services'
  ]);

  //Route
  app.config(function ($routeProvider) {
      $routeProvider
        .when('/', {
          templateUrl: 'views/main.html',
          controller: 'MainCtrl'
        });
    });

	//I18n
  app.config(['$translateProvider', function ($translateProvider) {
    $translateProvider.translations('en', {
      'BIRTHDATE': 'Birth Date',
      'ECOMOVA': 'Ecomova',
      'EMAIL': 'E-mail',
      'NAME': 'Name',
      'REGISTERYOUREMAIL': 'Register your e-mail to get the lastest news',
      'YOUREMAIL': 'Your e-mail',
      'YOURNAME': 'Your name',
      'SEND': 'Send'
    });
    $translateProvider.translations('pt', {
      'BIRTHDATE': 'Data de Nascimento',
      'ECOMOVA': 'Ecomova',
      'EMAIL': 'E-mail',
      'NAME': 'Nome',
      'REGISTERYOUREMAIL': 'Cadastre seu e-mail para receber mais informações',
      'YOUREMAIL': 'Seu e-mail',
      'YOURNAME': 'Seu nome',
      'SEND': 'Enviar'
    });
   $translateProvider.preferredLanguage('pt');
  }]);

  return app;

});
