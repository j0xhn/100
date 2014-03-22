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
        console.log("this is the personref", personRef);
        personRef.push({'user': userID,'comment': threadFromView,'value':1});
    } else {
        alert('sign in');
    }
}
$scope.upVoteComment = function (comment, selectedPerson, userID) {
    console.log('You clicked for overallUpVote');
    if (userID){
        if(comment[userID]){
            // tell them they can't vote
            if ( comment[userID].type === 1){
                alert('you already up Voted this user');
            } else {
                comment[userID].type=1;
                comment.value++;
            }
        } else {
            //create the userId for this tagName
            selectedPerson.lastVote = new Date();
            comment[userID] = {type:1};
            comment.value++;
        }
    } else {
        alert('you really should think about logging in');
    }
}
$scope.downVoteComment = function (comment, selectedPerson, userID) {
    console.log('You clicked for down Vote');
    if (userID){
        if(comment[userID]){
            // tell them they can't vote
            if ( comment[userID].type === -1){
                alert('you already down Voted this user');
            } else {
                comment[userID].type=-1;
                comment.value--;
            }
        } else {
            //create the userId for this tagName
            selectedPerson.lastVote = new Date();
            comment[userID] = {type:-1};
            comment.value--;
        }
    } else {
        alert('you really should think about logging in');
    }
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
$scope.upVoteOverall = function (selectedPerson, userID) {
    console.log('You clicked for up Vote');
    if (userID){
        if(selectedPerson.overallVotes[userID]){
            // tell them they can't vote
            if ( selectedPerson.overallVotes[userID].type === 1){
                alert('you already up Voted this user');
            } else {
                selectedPerson.overallVotes[userID].type=1;
                selectedPerson.overallVotes.value++;
            }
        } else {
            //create the userId for this tagName
            selectedPerson.overallVotes = {value:50};
            selectedPerson.lastVote = new Date();
            selectedPerson.overallVotes[userID] = {type:1};
            
        }
    } else {
        alert('you really should think about logging in');
    }
}
$scope.downVoteOverall = function (selectedPerson, userID) {
    console.log('You clicked for down Vote');
    if (userID){
        if(selectedPerson.overallVotes[userID]){
            // tell them they can't vote
            if ( selectedPerson.overallVotes[userID].type === -1){
                alert('you already down Voted this user');
            } else {
                selectedPerson.overallVotes[userID].type=-1;
                selectedPerson.overallVotes.value--;
            }
        } else {
            //create the userId for this tagName
            selectedPerson.lastVote = new Date();
            selectedPerson.overallVotes[userID] = {type:-1};
            selectedPerson.overallVotes.value = 50;
        }
    } else {
        alert('you really should think about logging in');
    }
}
///////////////////////////
// SET SELECTED PERSON
///////////////////////////
$scope.setPerson = function (person) {
	// console.log("This is the selected person: ", person);
	$scope.selectedPerson = person;
    $("#modal").modal('show'); // hack (should use angular-strap or anguar-ui)
    console.log($scope.selectedPerson);
    // $scope.overallVotes = Object.keys($scope.selectedPerson.overallVotes).length;
};
///////////////////////////
// SHOW OVERALL SCORE
///////////////////////////
$scope.showOverall = function (person, $event) {
    $('.showOverall').hide();
    $($event.target).nextAll('.showOverall').show();
};
///////////////////////////
// TAGS
///////////////////////////
$scope.tagCreate = function (tagName, selectedPerson, userID){
    if (userID) {
        var tagName = angular.lowercase(tagName);
        if (selectedPerson.votes[tagName]){
            if ( selectedPerson.votes[tagName][userID].type === 1){
                alert('you already up Voted this user');
            } else {
            //create the userId for this tagName
            selectedPerson.lastVote = new Date();
            selectedPerson.votes[tagName][userID] = {type:1};
            selectedPerson.votes[tagName].value++;
            }
        } else {
            selectedPerson.votes[tagName] = {tagName:tagName,value:1};
            selectedPerson.votes[tagName][userID] = {type:1};
            var tagRef = dbRef.child('/'+locationName+'/'+selectedPerson.id+'/searchTags/');
            tagRef.push({});
            tagName = '';
            console.log("the tagName is",tagName);
            return tagName = '';
        }
    } else {
        alert('sign in');
    }
}
$scope.upVote = function (tagName, selectedPerson, userID, $filter) {
    console.log('You clicked for overallUpVote');
    if (userID){
        if(selectedPerson.votes[tagName][userID]){
            // tell them they can't vote
            if ( selectedPerson.votes[tagName][userID].type === 1){
                alert('you already up Voted this user');
            } else {
                selectedPerson.votes[tagName][userID].type=1;
                selectedPerson.votes[tagName].value++;
            }
        } else {
            //create the userId for this tagName
            selectedPerson.lastVote = new Date();
            selectedPerson.votes[tagName][userID] = {type:1};
            selectedPerson.votes[tagName].value++;
        }
    } else {
        alert('you really should think about logging in');
    }
}
$scope.downVote = function (tagName, selectedPerson, userID, $filter) {
    console.log('You clicked for down Vote');
    if (userID){
        if(selectedPerson.votes[tagName][userID]){
            // tell them they can't vote
            if ( selectedPerson.votes[tagName][userID].type === -1){
                alert('you already down Voted this user');
            } else {
                selectedPerson.votes[tagName][userID].type=-1;
                selectedPerson.votes[tagName].value--;
            }
        } else {
            //create the userId for this tagName
            selectedPerson.lastVote = new Date();
            selectedPerson.votes[tagName][userID] = {type:-1};
            selectedPerson.votes[tagName].value--;
        }
    } else {
        alert('you really should think about logging in');
    }
}
});
