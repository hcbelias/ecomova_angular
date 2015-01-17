define(['angular'], function (angular) {
  'use strict';

  angular.module('ecomovaJsApp.services', [])
	.service('User', [ '$http', function User($http) {
        var urlBase = 'http://localhost:14942/user';

        this.getUser = function (id) {
          return $http.get(urlBase + '/' + id);
        };

        this.insertUser = function (user) {
          return $http.post(urlBase, user);
        };

        this.updateUser = function (cust) {
          return $http.put(urlBase + '/' + cust.Id, cust);
        };

        this.deleteUser = function (id) {
          return $http.delete(urlBase + '/' + id);
        };
	}]);
});
