'use strict';

angular.module('100App')
  .controller('LoginCtrl', function ($scope, LoginService) {
    
    $scope.login = function(){
      var chatRef = new Firebase('https://top100.firebaseio.com');
    var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        // makes variables via user authenticated with Firebase
        var profilePic = 'https://graph.facebook.com/' + user.id + '/picture?width=100&height=100';
        var firstName = user.first_name;
        var lastName = user.last_name;
        var gender = user.gender;
        var link = user.link;
        var email = user.email;
        var accessTocken = user.accessTocken;
        var id = user.id;
        console.log(user);
        console.log('User ID: ' + user.id + ', Provider: ' + user.provider+ ', PictureURL: ' + profilePic);
      } else {
        // user is logged out
      }
    });
      auth.login('facebook', {
        rememberMe: false,
        scope: 'user_photos'
      });
     // console.log(profilePic);
    };
     
  });
