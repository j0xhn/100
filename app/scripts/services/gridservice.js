'use strict';

angular.module('100App')
  .service('peopleService', function getPeople () {
  	return [{
    "firstName": "John",
    "lastName": "Storey",
    "age": 25,
    "location": "Provo",
    "email":'johndangerstorey@gmail.com',
    "link": "http//:www.johndangerstorey.com",
    "bank": 5,
    "overall": 15,
    "overallSubtotal1": 7,
    "overallSubtotal2": 6,
    'top10': [

    ]
        "1": {"Dreamer",9},
        "2": {"Adventurer",8},
        "3": {"Doer",7},
        "4": {"Hobbit",6},
        "5": {"Caribbean",5},
        "6": {"Travel",4},
        "7": {"Eccentric",3},
        "8": {"Forgetful",2},
        "9": {"Selfish",2},
        "10": {"easyGoing",2},
    },
    'random': [
        "",
        "",
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
}]
    // AngularJS will instantiate a singleton by calling "new" on this function
  });
