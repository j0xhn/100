'use strict';

angular.module('100App')
  .controller('LoginCtrl', function ($scope, $rootScope, peopleService) {
//does login popup
    $scope.loginPrompt = function(){
      console.log('you clicked login');
      $('body').toggleClass('modal-open-up');
    }
//creates new user
    $scope.submit = function(){
      var dbRef = new Firebase('https://top100.firebaseio.com');
      var auth = new FirebaseSimpleLogin(dbRef, function(error, user) {
        if (error) {
          // an error occurred while attempting login
          console.log(error);
        } else if (user) {
          console.log('this is the user', user)
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
                var dataBase = new Firebase ("https://top100.firebaseio.com/provo/" + user.id);
                console.log('you did not have a profile, so we will make one for:');
                console.log(user);
                dataBase.set({
                 "picture" : 'https://graph.facebook.com/' + user.id + '/picture?width=150&height=150',
                 "bio": user.firstName +' is pretty much awesome and has lots of friends that do fun things on the weekend.',
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
                 "votes": {'interesting':{'tagName':'interesting', 'value':50},'hot':{'tagName':'hot','value':50},'fun':{'tagName':'fun','value':50}},
                 "dateCreated": Date.now(),
                 "lastLogin": Date.now(),
                 "overallVotes": {
                    'value':50
                 },
                // GET friend count ~ SELECT friend_count FROM user WHERE uid = user.id;
                });
              }
          })
          console.log('people Object:',peopleObject);
        }
      });
      auth.login('facebook', {
        rememberMe: true,
        scope: 'email,user_location,user_birthday'
      });
      //clears login Prompt
      $scope.loginPrompt();
    };
});
