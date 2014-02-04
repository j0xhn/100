'use strict';

angular.module('angularProfileApp')
  .controller('peopleCtrl', function ($scope, peopleService) {
  	$scope.test = '| This will show if my Angular is working';
  	$scope.testName = 'John',
  	$scope.people = [
  		{
  		"firstName": "John 1",
	    "lastName": "Storey",
	    "link": "http//:www.johndangerstorey.com",
	    "picture": "../../images/profilePics/JohnPic.jpg",
	    "age": 25
		},
    	
    	{
    	"firstName": "David 2",
	    "lastName": "Storey",
	    "link": "http//:www.johndangerstorey.com",
	    "picture": "../../images/profilePics/DavidPic.jpg",
	    "age": 25
		},

		{
    	"firstName": "Candace 3",
	    "lastName": "Storey",
	    "link": "http//:www.johndangerstorey.com",
	    "picture": "../../images/profilePics/CandacePic.jpg",
	    "age": 25
		},

		{
    	"firstName": "Michelle 4",
	    "lastName": "Wiggins",
	    "link": "http//:www.johndangerstorey.com",
	    "age": 25
		},

		{
    	"firstName": "Robert 5",
	    "lastName": "Wiggins",
	    "link": "http//:www.johndangerstorey.com",
	    "age": 25
		},

		{
    	"firstName": "Eric 6",
	    "lastName": "Wiggins",
	    "link": "http//:www.johndangerstorey.com",
	    "age": 25
		},

		{
    	"firstName": "April 7",
	    "lastName": "Wiggins",
	    "link": "http//:www.johndangerstorey.com",
	    "age": 25
		},

		{ 
    	"firstName": "Scott 8",
	    "lastName": "Wiggins",
	    "link": "http//:www.johndangerstorey.com",
	    "age": 25
		},

		{ 
    	"firstName": "Grandma 9",
	    "lastName": "Wiggins",
	    "link": "http//:www.johndangerstorey.com",
	    "age": 25
		},

		{ 
    	"firstName": "Grandpa 10",
	    "lastName": "Wiggins",
	    "link": "http//:www.johndangerstorey.com",
	    "age": 25
		},

    ]
  	
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  });
