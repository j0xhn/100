'use strict';

angular.module('100App')
  .controller('tagCtrl', function ($scope, peopleService) {

///////////////////////////
// Make Clicks on Tags Dynamic
///////////////////////////
    //upVote on tag
    $scope.upVote = function (selectedPerson, tagName) {
      selectedPerson.tags[tagName]++;
    };

});
