'use strict';
// ? this code repeats 3 times... why ?
angular.module('100App')
  .controller('peopleCtrl', function ($scope, $firebase, peopleService) {
///////////////////////////
// MAKE SCOPE VARIABLES
///////////////////////////

//people
var people = peopleService.getPeople();
$scope.people = people.$bind($scope, 'people');
people = $scope.people;
console.log('all people from ctrl:', $scope.people);



//location
var locationName = peopleService.getLocationName();
$scope.locationName = locationName;
// console.log('Location: ',locationName);



///////////////////////////
// CHANGE OVERALL SCORE ON CLICK
///////////////////////////
$scope.overallUpVote = function (person) {
    console.log('You clicked for overallUpVote');
    person.overall++;
}

$scope.overallDownVote = function (person) {
    console.log('You clicked for overallDownVote');
    person.overall--;
}

///////////////////////////
// SET SELECTED PERSON
///////////////////////////
    $scope.setPerson = function (person) {
    	console.log("This is the selected person: ");
        // console.log(person);
    	$scope.selectedPerson = person;
    };
// ng-mouseover shows overall score
    $scope.showOverall = function (person, $event) {
        $('.showOverall').hide();
        $($event.target).nextAll('.showOverall').show();
        // $($event.target).next('.person')css('margin-top:24px');
    };

  });
