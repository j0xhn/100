'use strict';

angular.module('100App').factory('peopleService', function() {
///////////////////////////
//get data by location
///////////////////////////
    var allPeople = {};
    allPeople = new Firebase("https://top100.firebaseio.com/locations/usa/west/utah/utahValley/provo");
    allPeople.on('value', function(recieved){
        var peopleRecieved = recieved.val();
        console.log("from peopleService: "+ peopleRecieved.toString());
        console.log(peopleRecieved)
    });
    return allPeople;
    //

    // AngularJS will instantiate a singleton by calling "new" on this function
  });




