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
// SET SELECTED PERSON & TAG ARRAY
///////////////////////////
    $scope.setPerson = function (person) {
    	// console.log("This is the selected person: ", person);
    	$scope.selectedPerson = person;
        //creates tag array according to value 
        var output = person.tags;
        var sortedTags = [];
        $.each(output, function(key, value) {
            sortedTags.push({v:value, k: key});
        });
        sortedTags.sort(function(a,b){
           if(a.v > b.v){ return -1}
            if(a.v < b.v){ return 1}
              return 0;
        });
        $scope.sortedTags = sortedTags;
    };
    // ng-mouseover shows overall score on selected person
    $scope.showOverall = function (person, $event) {
        $('.showOverall').hide();
        $($event.target).nextAll('.showOverall').show();
    };

  });
