'use strict';
// ? this code repeats 3 times... why ?
angular.module('100App')
  .controller('peopleCtrl', function ($scope, $rootScope, $firebase, $modal, peopleService, $filter) {
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
///////////////////////////
// CHANGE OVERALL SCORE ON CLICK
///////////////////////////
$scope.overallUpVote = function (selectedPerson, userID, $filter) {
    console.log('You clicked for overallUpVote');
    if (userID){
        if(selectedPerson.overallVotes[userID]){
            // tell them they can't vote
            alert('you already upVoted this user');
        } else {
            var overallVoteRef = dbRef.child('/'+locationName+'/'+selectedPerson.id+'/overallVotes/'+userID);
            overallVoteRef.set(1);
        }
    } else {
        alert('you really should think about logging in');
    }
    // $scope.$apply();
    
    // $filter('object2Array')(selectedPerson.overallVotes);
    // $scope.overallVotes = selectedPerson.overallVotes.length();
    // console.log(scope.overallVotes);
    
}
$scope.overallDownVote = function (person, userID) {
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
    console.log($scope.selectedPerson);
    $scope.overallVotes = Object.keys($scope.selectedPerson.overallVotes).length;
};
///////////////////////////
// ng-mouseover shows overall score on selected person
///////////////////////////
$scope.showOverall = function (person, $event) {
    $('.showOverall').hide();
    $($event.target).nextAll('.showOverall').show();
};
///////////////////////////
// TAGS
///////////////////////////
$scope.tagCreate = function (tagFromView, selectedPerson, userID){
    if (userID) {
        var personRef = dbRef.child('/'+locationName+'/'+selectedPerson.id+'/searchTags/');
        personRef.push(tagFromView);
    } else {
        alert('sign in');
    }
}
$scope.upVote = function (selectedPerson, tagName) {
  console.log('selectedPerson', selectedPerson)
  selectedPerson.tags[tagName]++;
};
$scope.downVote = function (selectedPerson, tagName) {
  selectedPerson.tags[tagName]--;
};

});
