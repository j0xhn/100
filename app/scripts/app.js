'use strict';

angular.module('angularProfileApp', [
	'ui.router'
]).config(function ($stateProvider, $urlRouterProvider) {

    // $urlRouterProvider.otherwise('/');

var nav = {
      templateUrl: 'views/nav.html',
      // controller: 'NavCtrl',
      // resolve: {
      //   user: function (userService) {
      //     return userService.get();
      //   },
      //   loggedInUser: function (userService) {
      //     return userService.getLoggedInUser();
      //   }
      // }
    };

var footer = {
      templateUrl: 'views/footer.html',
      // controller: 'NavCtrl',
      // resolve: {
      //   user: function (userService) {
      //     return userService.get();
      //   },
      //   loggedInUser: function (userService) {
      //     return userService.getLoggedInUser();
      //   }
      // }
    };

$stateProvider
      .state('root', {
        url: '/',
        views: {
          nav: nav,
          body: {
            templateUrl: 'views/main.html',
            controller: 'MainCtrl'
          },
          footer: {
          	templateUrl: 'views/footer.html'
          }
        }
      })
      .state('dashboard', {
        url: '/dashboard',
        views: {
          nav: nav,
          body: {
            templateUrl: 'views/dashboard.html',
            controller: 'DashboardCtrl'
          }
        }
      })
});