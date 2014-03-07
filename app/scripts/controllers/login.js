'use strict';

angular.module('100App')
  .controller('LoginCtrl', function ($scope, LoginService) {
    var chatRef = new Firebase('https://top100.firebaseio.com');
    var auth = new FirebaseSimpleLogin(chatRef, function(error, user) {
      if (error) {
        // an error occurred while attempting login
        console.log(error);
      } else if (user) {
        console.log(user);
        // user authenticated with Firebase
        console.log('User ID: ' + user.id + ', Provider: ' + user.provider);
      } else {
        // user is logged out
      }
    });
    $scope.login = function(){
      auth.login('facebook', {
        rememberMe: true,
        scope: 'email'
      });
    };
  });
