'use strict';

angular.module('100App')
  .controller('LoginCtrl', function ($scope, $rootScope, peopleService) {
// updates user if logged in
  $scope.login = function(){
      var chatRef = new Firebase('https://top100.firebaseio.com');
      var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        //update user on firebase
        var dataBase = new Firebase ("https://top100.firebaseio.com/provo/" + user.id);
        console.log('you got inside of firebase set');
        dataBase.set({
         "picture" : 'https://graph.facebook.com/' + user.id + '/picture?width=150&height=150',
         "firstName" : user.first_name,
         "lastName" : user.last_name,
         "fullName" : user.displayName,
         "gender" : user.gender,
         "link" : user.link,
         "email" : user.email,
         "accessToken" : user.accessToken,
         "id" : user.id,
         "location" : user.location.name,
         "lastLogin": Date.now(),
        });
       console.log(user);
      } else {
        console.log('you do not have a profile');
      }
    });
  };
//creates new user
    $scope.submit = function(){
      var chatRef = new Firebase('https://top100.firebaseio.com');
      var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
        if (error) {
          // an error occurred while attempting login
          console.log(error);
        } else if (user) {
          console.log('this is the user', user)
          //checks to see if there is user
          var peopleObject = peopleService.getPeople();
          peopleObject.$on('loaded', function() {
            console.log('loaded:', peopleObject)
             // for loop in here
            if (user.id in peopleObject) {
              console.log("user already exists as", user)
              $rootScope.userPicture = 'https://graph.facebook.com/' + user.id + '/picture?width=150&height=150';
              $rootScope.$apply();
              // $scope.profilePicture = user.picture;
              console.log($scope.userPicture);
            } else {
                console.log("user does not exist yet")
                var dataBase = new Firebase ("https://top100.firebaseio.com/provo/" + user.id);
                console.log('you did not have a profile, so we will make one for:');
                console.log(user);
                dataBase.set({
                 "picture" : 'https://graph.facebook.com/' + user.id + '/picture?width=150&height=150',
                 "firstName" : user.first_name,
                 "lastName" : user.last_name,
                 "fullName" : user.displayName,
                 "gender" : user.gender,
                 "link" : user.link,
                 "accessToken" : user.accessToken,
                 "id" : user.id,
                 // "location" : user.location,
                 "votes": 1,
                 "dateCreated": Date.now(),
                 "overall": 20,
                 "tags": {
                    "hot":20,
                    "chill":19,
                    "funny": 57,
                    "smart": 62,
                    "successful": 10,
                  }
                // get friend count ~ SELECT friend_count FROM user WHERE uid = user.id;
                });
              }
          })
          console.log('people Object:',peopleObject);
        }
      });
          

/*
          for (var id in peopleObject){
            console.log('    id:', id)
            if(id === user.id){
                console.log('you tried submiting but are already a member');
            } else {
                console.log('     not  match')
                     // if there is no user - writes to firebase
              // var dataBase = new Firebase ("https://top100.firebaseio.com/provo/" + user.id);
              // console.log('you did not have a profile, so we will make one for:');
              // console.log(user);
              // dataBase.set({
              //  "picture" : 'https://graph.facebook.com/' + user.id + '/picture?width=150&height=150',
              //  "firstName" : user.first_name,
              //  "lastName" : user.last_name,
              //  "fullName" : user.displayName,
              //  "gender" : user.gender,
              //  "link" : user.link,
              //  "accessToken" : user.accessToken,
              //  "id" : user.id,
              //  // "location" : user.location,
              //  "votes": 1,
              //  "dateCreated": Date.now(),
              //  "overall": 1,
              //  "tags": {
              //     "hot":20,
              //     "chill":19,
              //     "funny": 57,
              //     "smart": 62,
              //     "successful": 10,
              //   }
              // // get friend count ~ SELECT friend_count FROM user WHERE uid = user.id;
              // });
            }
          }
        }
       // console.log(profilePic);
      });
*/
      auth.login('facebook', {
        rememberMe: true,
        scope: 'user_location, email, basic_info'
      });
    };
});
