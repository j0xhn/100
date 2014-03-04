'use strict';

angular.module('100App')
  .controller('peopleCtrl', function ($scope) {
///////////////////////////
// MIMIC SERVICE
///////////////////////////
    var allPeople = {};
    allPeople = new Firebase("https://top100.firebaseio.com/locations/usa/west/utah/utahValley/provo");
    $scope.locationName = allPeople.name();
    allPeople.on('value', function(peopleRecieved){
        $scope.allPeople = peopleRecieved.val();
        console.log($scope.locationName);
        console.log($scope.allPeople);
    });
///////////////////////////
// MAKE SCOPE VARIABLES
///////////////////////////


///////////////////////////
// Make clicks update person object in firebase
///////////////////////////



///////////////////////////
// SET SELECTED PERSON
///////////////////////////
    $scope.setPerson = function (person) {
    	console.log("This is the selected person: ");
      console.log(person);
    	$scope.selectedPerson = person;
    };

  });
