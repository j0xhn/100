'use strict';

angular.module('angularProfileApp')
  .controller('peopleCtrl', function ($scope, peopleService) {
  	$scope.test = 'Hey! My angular works :)';
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
