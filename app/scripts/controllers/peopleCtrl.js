'use strict';

angular.module('100App')
  .controller('peopleCtrl', function ($scope, peopleService) {
  	$scope.test = '| This will show if my Angular is working';
  	
    var people = new Firebase("https://top100.firebaseio.com/locations/usa/west/utah/utahValley/provo");
    people.on('value', function(peopleRecieved){
        $scope.people = peopleRecieved.val();
        console.log($scope.people);
    });

    $scope.setPerson = function (person) {
    	console.log("This is the selected person: ");
        console.log(person);
    	$scope.selectedPerson = person;
    };

  });
