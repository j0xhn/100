'use strict';
// ROUTING
angular.module('100App', [
	'ui.router', 'ui.bootstrap', 'firebase','xeditable','ngAnimate'
]).config(function ($stateProvider, $urlRouterProvider) {
  // UI ROUTER
  $urlRouterProvider.otherwise('/');

  var nav = {
        templateUrl: 'views/nav.html',
        controller: 'peopleCtrl',
        // resolve: {
        //   user: function (userService) {
        //     return userService.get();
        //   },
        //   loggedInUser: function (userService) {
        //     return userService.getLoggedInUser();
        //   }
        // }
      };
  var test = {
        templateUrl: 'views/hello.html',
        controller: 'peopleCtrl',
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
        controller: 'peopleCtrl',
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
          }})
        .state('user', {
        url: "/{param:2}",
          views: {
            nav: nav,
            body: body,
            footer: footer,
          }})
  ;
});

// angular.module('100App', [ 'xeditable'])
// .run(function(editableOptions) {
//   editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
// });