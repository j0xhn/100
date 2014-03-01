'use strict';

angular.module('100App')
  .controller('peopleCtrl', function ($scope, peopleService) {
  	$scope.test = '| This will show if my Angular is working';
  	$scope.testName = 'John',
  	$scope.people = [
    {
    "firstName": "John",
    "lastName": "Storey",
    "picture": "../../images/profilePics/JohnPic.jpg",
    "age": 25,
    "location": "Provo",
    "email":'johndangerstorey@gmail.com',
    "link": "http//:www.johndangerstorey.com",
    "bank": 5,
    "overall": 15,
    "overallSubtotal1": 7,
    "overallSubtotal2": 6,
    'random': [
        {"Goofball":1},
        {"Romantic":1},
        {"Dreamer":9},
        {"Dreamer":9},
        {"Adventurer":8},
        {"Doer":7},
        {"Hobbit":6},
        {"Caribbean":5},
        {"Travel":4},
        {"Eccentric":3},
        {"Forgetful":2},
        {"Selfish":2},
        {"easyGoing":2},
    ],
    "messages": [
      {"User": "First Message Goes Here"},
      {"SecondUser":"Second Message Goes Here"},
    ],
    "address": {
        "streetAddress": "21 2nd Street",
        "city": "New York",
        "state": "NY",
        "postalCode": 10021
    },
    "phoneNumbers": [
        {
            "type": "home",
            "number": "212 555-1234"
        },
        {
            "type": "fax",
            "number": "646 555-4567"
        }
    ]
},
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
  	
    $scope.setPerson = function (person) {
    	console.log(person);
    	$scope.selectedPerson = person;
    };

  });
