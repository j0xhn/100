'use strict';

angular.module('100App', [
	'ui.router', 'ui.bootstrap'
]).config(function ($stateProvider, $urlRouterProvider) {

    $urlRouterProvider.otherwise('/');

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

var modal = {
      templateUrl: 'views/modal.html',
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

var body = {
      templateUrl: 'views/main.html',
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
          body: body,
          footer: footer,
        }
      })
      // .state('modal', {
      //   url: '/person',
      //   views: {
      //     nav: nav,
      //     body: body,
      //     footer: footer,
      //   }
      // })
});