'use strict';

angular.module('100App')
  .controller('LoginCtrl', function ($scope, LoginService) {
    
    $scope.submit = function(){
      var chatRef = new Firebase('https://top100.firebaseio.com');
    var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        //writes user to firebase
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
         "votes": 1,
         "dateCreated": Date.now(),
         "tags": {
            "hot":0,
            "chill":0,
            "funny": 0,
            "smart": 0,
            "successful": 0,
            "determined": 0,
            "charitable": 0,
            "righteous": 0,
            "sinner": 0,
            "badass": 0
          }
        });
     
        console.log(user);
        console.log('User ID: ' + user.id + ', Provider: ' + user.provider+ ', PictureURL: ' + picture);
      } else {
        // user is logged out
      }
    });
      auth.login('facebook', {
        rememberMe: true,
        scope: 'user_location, email'
      });
     // console.log(profilePic);
    };
     
  });
