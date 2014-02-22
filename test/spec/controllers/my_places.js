'use strict';

describe('Controller: MyPlacesCtrl', function () {

  // load the controller's module
  beforeEach(module('ecomovaJsApp'));

  var MyPlacesCtrl,
    scope;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($controller, $rootScope) {
    scope = $rootScope.$new();
    MyPlacesCtrl = $controller('MyPlacesCtrl', {
      $scope: scope
    });
  }));

  it('should attach a list of awesomeThings to the scope', function () {
    expect(scope.awesomeThings.length).toBe(3);
  });
});
