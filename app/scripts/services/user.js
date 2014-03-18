define(['angular'], function (angular) {
  'use strict';

  angular.module('ecomovaJsApp.services', [])
	.service('User', [ '$http', function User($http) {
        var urlBase = 'http://localhost:55405/user';

        this.getUser = function (id) {
            debugger;
          return $http.get(urlBase + '/' + id);
        };

        this.insertUser = function (user) {
            debugger;
          return $http.post(urlBase, user);
        };

        this.updateUser = function (cust) {
            debugger;
          return $http.put(urlBase + '/' + cust.ID, cust);
        };

        this.deleteUser = function (id) {
            debugger;
          return $http.delete(urlBase + '/' + id);
        };
	}]);
});
