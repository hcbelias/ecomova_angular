/*jshint unused: vars */
define(['angular', 'controllers/main', 'angularTranslate']/*deps*/, function (angular)/*invoke*/ {
  'use strict';
  
  //DEP
  var app = angular.module('ecomovaJsApp',[
    'ecomovaJsApp.controllers.MainCtrl',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngRoute',
	'pascalprecht.translate'
  ]);
  
  //Route
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
	
	//I18n
	app.config(['$translateProvider', function ($translateProvider) {
	  $translateProvider.translations('en', {
		'Ecomova': 'Ecomova',		
		'RegisterYourEmail': 'Register your e-mail to get the lastest news',
		'YourEmail': 'Your e-mail',
		'Send': 'Send'
	  });
	 
	  $translateProvider.translations('pt', {
		'Ecomova': 'Ecomova',		
		'RegisterYourEmail': 'Cadastre seu e-mail para receber mais informações',
		'YourEmail': 'Seu e-mail',
		'Send': 'Enviar'
		
	  });
	 
	  $translateProvider.preferredLanguage('pt');
	  
	}]);
	return app;
});
