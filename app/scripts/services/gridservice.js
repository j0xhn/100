'use strict';

angular.module('100App')
  .service('peopleService', function getPeople () {
  	return [{
    "firstName": "John",
    "lastName": "Storey",
    "link": "http//:www.johndangerstorey.com",
    "age": 25,
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
