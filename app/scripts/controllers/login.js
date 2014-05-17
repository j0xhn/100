'use strict';

angular.module('100App')
  .controller('LoginCtrl', function ($scope, $rootScope, peopleService) {
// creates new user via createModal
    $scope.createUser = function(firstNameFromView, lastNameFromView, pictureURLFromView, bioFromView, websiteFromView, emailFromView, roleFromView, housesSold, tag1FromView, tag2FromView, tag3FromView ){
      console.log('You made it in to Create Modal');
      var userID = Date.now();
      var dataBase = new Firebase ("https://top100.firebaseio.com/realestate/" + userID);
      var fullNameFromView = firstNameFromView + ' ' + lastNameFromView;
      console.log(firstNameFromView, lastNameFromView, pictureURLFromView, bioFromView, emailFromView, roleFromView, housesSold, tag1FromView, tag2FromView, tag3FromView);
      console.log(fullNameFromView);
      dataBase.set({
                 "picture" : pictureURLFromView,
                 "bio":bioFromView,
                 "role":roleFromView,
                 "email": emailFromView,
                 "location": 'Portland',
                 "firstName" : lastNameFromView,
                 "lastName" : firstNameFromView,
                 "fullName" : fullNameFromView,
                 "link" : websiteFromView,
                 "votes": {tag1FromView:{'tagName':tag1FromView, 'value':10},tag2FromView:{'tagName':tag2FromView,'value':10}, tag3FromView:{'tagName':tag3FromView,'value':10}},
                 "dateCreated": userID,
                 "overallVotes": {
                    'value':50
                 },
                });

    }
//creates new user from Facebook using Firebase
    $scope.submitLogin = function(fromMain){
      var dbRef = new Firebase('https://top100.firebaseio.com');
      var auth = new FirebaseSimpleLogin(dbRef, function(error, user) {
        if (error) {
          // an error occurred while attempting login
          console.log(error);
        } else if (user) {
          //hides login
          $( "#top_nav_right" ).find('a').hide()
          //checks to see if there is user
          var peopleObject = peopleService.getPeople();
          peopleObject.$on('loaded', function() {
            console.log('loaded:', peopleObject)
             // for loop to assign picture
            if (user.id in peopleObject) {
              $rootScope.userPicture = 'https://graph.facebook.com/' + user.id + '/picture?width=150&height=150';
              $rootScope.userID = user.id;
              //checks to see if last login was 24hrs ago
              // var userID = user.id;
              // var currentTime = Date.now();
              // var lastVoteTime = peopleObject[userID].lastVoteTime;
              // var diffHours = Math.round(Math.abs(currentTime - lastVoteTime)/(3600));
              // if (diffHours >= 24) {
              //     console.log('add 5 votes');
              //     var lastVoteTimeRef = dbRef.child('provo/'+userID);
              //     lastVoteTimeRef.update({'lastLogin': currentTime});
              //     $rootScope.userLastLogin = peopleObject[userID].lastLogin;
              // } else {
              //     alert('you do not have any more votes');
              // }
              $rootScope.$apply();
            } else {
                console.log("user does not exist yet")
                var dataBase = new Firebase ("https://top100.firebaseio.com/realestate/" + user.id);
                console.log('you did not have a profile, so we will make one for:');
                console.log(user);
                dataBase.set({
                 "picture" : 'https://graph.facebook.com/' + user.id + '/picture?width=150&height=150',
                 "bio":'Awesome Agent in the Portland area',
                 "role":'Agent',
                 "email": user.email,
                 "location": user.location.name,
                 "firstName" : user.first_name,
                 "lastName" : user.last_name,
                 "fullName" : user.displayName,
                 "gender" : user.gender,
                 "link" : user.link,
                 "accessToken" : user.accessToken,
                 "id" : user.id,
                 // "location" : user.location,
                 "votes": {'professional':{'tagName':'professional', 'value':10},'hustle':{'tagName':'hustle','value':10},'availability':{'tagName':'availability','value':10}},
                 "dateCreated": Date.now(),
                 "lastLogin": Date.now(),
                 "overallVotes": {
                    'value':50
                 },
                // GET friend count ~ SELECT friend_count FROM user WHERE uid = user.id;
                });
              }
          });
        }
      });
      auth.login('facebook', {
        rememberMe: true,
        scope: 'email,user_location,user_birthday'
      });
      peopleService.loginPrompt();
      //fixes single modal toggle
      if (fromMain){
        peopleService.loginPrompt();
      }
    };
});
