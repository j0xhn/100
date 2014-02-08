'use strict';

describe('Directive: jdsPopup', function () {

  // load the directive's module
  beforeEach(module('angularProfileApp'));

  var element,
    scope;

  beforeEach(inject(function ($rootScope) {
    scope = $rootScope.$new();
  }));

  it('should make hidden element visible', inject(function ($compile) {
    element = angular.element('<jds-popup></jds-popup>');
    element = $compile(element)(scope);
    expect(element.text()).toBe('this is the jdsPopup directive');
  }));
});
