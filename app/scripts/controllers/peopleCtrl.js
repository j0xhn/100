'use strict';
// ? this code repeats 3 times... why ?
angular.module('100App')
  .controller('peopleCtrl', function ($scope, $rootScope, $firebase, $modal, peopleService) {
var dbRef = new Firebase('https://top100.firebaseio.com');

$scope.setFilter = function(value){
    console.log(value);
    $scope.sortField = value;
}
///////////////////////////
// COMMENTS
///////////////////////////
$scope.commentCreate = function (threadFromView, selectedPerson, userID){
    if (userID) {
        console.log('your inside thread', threadFromView);
        console.log(locationName, userID);
        var commentID = userID
        var personRef = dbRef.child('/'+locationName+'/'+selectedPerson.id+'/comments/');
        personRef.push({'userID': userID,'comment': threadFromView,'upVotes':1});
    } else {
        alert('sign in');
    }
}
$scope.upVoteComment = function (comment){
    console.log('selected Person comment:', comment.upVotes)
    comment.upVotes++;
}
///////////////////////////
// MAKE SCOPE VARIABLES
///////////////////////////
//people
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
    $scope.selectedPersondbRef = dbRef.child(person.id);
    console.log($scope.selectedPersonRef);
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
///////////////////////////
// MAKE SCOPE VARIABLES
///////////////////////////
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
