'use strict';
// ? this code repeats 3 times... why ?
angular.module('100App')
  .controller('peopleCtrl', function ($scope, $rootScope, $firebase, $modal, peopleService, $filter, $stateParams) {
var dbRef = new Firebase('https://top100.firebaseio.com');
$scope.param = $stateParams;

$scope.loginPrompt = function(){
    peopleService.loginPrompt();
}
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
        $( '#commentCreateForm' ).each(function(){
        this.reset();
        });
    } else {
        peopleService.loginPrompt();
    }
}
$scope.upVoteComment = function (comment, selectedPerson, userID) {
    console.log('You clicked for up vote comment');
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
        peopleService.loginPrompt();
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
        peopleService.loginPrompt();
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
            selectedPerson.overallVotes.value++;
            
        }
    } else {
        peopleService.loginPrompt();
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
            selectedPerson.overallVotes.value = 49;
        }
    } else {
        peopleService.peopleService.loginPrompt();
    }
}
///////////////////////////
// SET SELECTED PERSON INTO MODAL
///////////////////////////
$scope.setPerson = function (person) {
	$scope.selectedPerson = person;
    $("#modal").modal('show'); // hack (should use angular-strap or anguar-ui)
    console.log($scope.selectedPerson);
    if($rootScope.userID == $scope.selectedPerson.id){
        console.log("it's a match!")
        //find bio & make it editable
    //     $('#bio').replaceWith('<form id="bioCreate" ng-submit="bioCreate(bioFromView)"><textarea id="bio" maxlength="160" ng-model="bioFromView">'+ $scope.selectedPerson.bio +'</textarea><button type="submit" class="btn btn-xs tagBtns" id="submitBtnMinimal" >submit</button></form>')
    $('#bio').replaceWith( '{{selectedPerson.bio}}' )

    }
};
$scope.bioCreate = function(bioFromView){
    console.log(bioFromView)
    console.log('stepped into bio Create')
}
$scope.cancel = function(){
    console.log('you clicked to cancel');
   $("#modal").modal('hide');
}
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
        }
        $( '#tagCreateForm' ).each(function(){
        this.reset();
        });
    } else {
        peopleService.loginPrompt();
    }
}
$scope.upVote = function (tagName, selectedPerson, userID, $filter) {
    console.log('You clicked for up vote');
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
        peopleService.loginPrompt();
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
        peopleService.loginPrompt();
    }
}
});
