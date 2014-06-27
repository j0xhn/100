'use strict';
// ? this code repeats 3 times... why ?
angular.module('100App')
  .controller('peopleCtrl', function ($scope, $rootScope, $firebase, $modal, peopleService, $filter, $stateParams) {
///////////////////////////
// MAKE SCOPE VARIABLES
///////////////////////////
//people


var people = peopleService.getPeople();
var isSelected = 0;
people.$bind($scope, 'people');
$scope.$watch('people', function(people) {
    // DIRTY HACK:
    if ($scope.selectedPerson) {
        $scope.selectedPerson = people[$scope.selectedPerson.id]
    }
}, true)
// curator
var curator = peopleService.getCurator();
//location
var locationName = peopleService.getLocationName();
$scope.locationName = locationName;
var dbRef = new Firebase('https://top100.firebaseio.com');
//param
$scope.param = $stateParams;
console.log($scope.param);
//login prompt
$scope.loginPrompt = function(){
    peopleService.loginPrompt();
}
//setting filter with an object
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
        personRef.push({'user': userID,'comment': threadFromView,'value':1});
        $( '#commentCreateForm' ).each(function(){
        this.reset();
        });
        //rewards user for engagment 
        people[userID].overallVotes.value++;
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
                alert('you already voted on this');
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
        //rewards user for engagment 
        people[userID].overallVotes.value++;
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
                alert('you already voted on this');
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
        //rewards user for engagment 
        people[userID].overallVotes.value++;
    } else {
        peopleService.loginPrompt();
    }
}
///////////////////////////
// CHANGE OVERALL SCORE ON CLICK
///////////////////////////
$scope.upVoteOverall = function (selectedPerson, userID, fromMain) {
    console.log('fromMain', fromMain);
    //sets that it was up vote from Main View
    isSelected = fromMain;
    if (userID){
        if(selectedPerson.overallVotes[userID]){
            // tell them they can't vote
            if ( selectedPerson.overallVotes[userID].type === 1){
                alert('you already voted on this');
            } else {
                selectedPerson.overallVotes[userID].type=1;
                selectedPerson.overallVotes.value++;
            }
        } else {
            //create the userId for this tagName
            selectedPerson.lastVote = new Date();
            selectedPerson.overallVotes[userID] = {type:1};
            selectedPerson.overallVotes.value++;
        }
        //rewards user for engagment 
        people[userID].overallVotes.value++;
    } else {
        peopleService.loginPrompt();
    }
}
$scope.downVoteOverall = function (selectedPerson, userID) {
    console.log('you already voted on this');
    if (userID){
        if(selectedPerson.overallVotes[userID]){
            // tell them they can't vote
            if ( selectedPerson.overallVotes[userID].type === -1){
                alert('you already voted on this');
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
        //rewards user for engagment 
        people[userID].overallVotes.value++;
    } else {
        peopleService.loginPrompt();
    }
}
///////////////////////////
// SET SELECTED PERSON INTO MODAL
///////////////////////////
$scope.setPerson = function (person, fromModal) {
    isSelected = fromModal;
	$scope.selectedPerson = person;
    if(! isSelected){
        $("#modal").modal('show'); // hack (should use angular-strap or anguar-ui)
    }
    console.log($scope.selectedPerson);
    if($rootScope.userID == $scope.selectedPerson.id){
        console.log("it's a match!")
        //find bio & make it editable
         // $('#bio').replaceWith('<form id="bioCreate" ng-submit="bioCreate(bioFromView)"><textarea id="bio" maxlength="160" ng-model="bioFromView">'+ $scope.selectedPerson.bio +'</textarea><button type="submit" class="btn btn-xs tagBtns" id="submitBtnMinimal" >submit</button></form>')
    // $('#bio').replaceWith( '{{selectedPerson.bio}}' )
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
// createModal 
///////////////////////////
$scope.callCreateModal = function (e) {
   console.log('you called Create Modal');
    $("#createModal").modal('show'); // hack (should use angular-strap or anguar-ui)
}
$scope.cancelCreateModal = function(e){
    console.log('you clicked to cancel');
   $("#createModal").modal('hide');
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
                alert('you already voted on this');
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
        //rewards user for engagment 
        people[userID].overallVotes.value++;
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
                alert('you already voted on this');
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
        //rewards user for engagment 
        people[userID].overallVotes.value++;
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
                alert('you already voted on this');
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
        //rewards user for engagment 
        people[userID].overallVotes.value++;
    } else {
        peopleService.loginPrompt();
    }
}
});
