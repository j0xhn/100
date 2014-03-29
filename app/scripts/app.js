'use strict';
// ROUTING
angular.module('100App', [
	'ui.router', 'ui.bootstrap', 'firebase','xeditable'
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
          }
  });

// PARSE
  Parse.initialize("HTTbOAqQAWAq7GFFNlPoj6smTetBrzKjtjPCyel5", "VxZKli4B50WuyxZv4AEIfzOU04YOIvS0oo4I8F0N");
  
});
// angular.module('100App', [
//   'ui.router', 'ui.bootstrap', 'firebase','xeditable'
// ]).run(function(editableOptions) {
//   editableOptions.theme = 'bs3'; // bootstrap3 theme. Can be also 'bs2', 'default'
// });