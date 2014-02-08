'use strict';

angular.module('angularProfileApp')
  .directive('jdsPopup', function ($timeout) {
    return {
      template: '<div class="popup" style="display: none" ng-transclude></div>',
      restrict: 'A',
      transclude: true,
      link: function postLink(scope, element, attrs) {
      	$timeout(function function_name (argument) {
	      	var selector = attrs.jdsPopup,
	        	targets = angular.element(document.body).find(selector);

	        targets.on('click', function(){
	        	console.log("you just clicked");
	        	element.find('.popup').toggle();
	        });
      	});
        
      }
    };
  });
