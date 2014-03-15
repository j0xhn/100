'use strict';
// ? this code repeats 3 times... why ?
angular.module('100App')
  .controller('peopleCtrl', function ($scope, $firebase, $modal, peopleService) {
///////////////////////////
// MAKE SCOPE VARIABLES
///////////////////////////

//people
//$scope.people = peopleService.getPeople();
var people = peopleService.getPeople();
people.$bind($scope, 'people');

$scope.$watch('people', function(people) {
    // DIRTY HACK:
    if ($scope.selectedPerson) {
        $scope.selectedPerson = people[$scope.selectedPerson.id]
    }
}, true)

//location
var locationName = peopleService.getLocationName();
$scope.locationName = locationName;
// console.log('Location: ',locationName);


$scope.resetForm = function (person) {
    console.log('you made it inside');
    $scope.selectors.$setPristine(true);
}
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
    $("#modal").modal('show'); // hack (should use angular-strap or anguar-ui)

    /*
    //creates tag array according to value 
    var output = person.tags || [];
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
    */
};
// ng-mouseover shows overall score on selected person
$scope.showOverall = function (person, $event) {
    $('.showOverall').hide();
    $($event.target).nextAll('.showOverall').show();
};

// Makes both radio
$scope.$watch('search', function(v){
  $scope.searchGender = "";
});

});
