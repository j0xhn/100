'use strict';

angular.module('100App').factory('peopleService', function peopleService($q, $firebase){
var deferred = $q.defer();
var FBURL = "https://top100.firebaseio.com/";
///////////////////////////
//get data by location
///////////////////////////
return {
    getPeople: function () {
        var ref = new Firebase(FBURL + 'locations/usa/west/utah/utahValley/provo');
        return $firebase(ref);
    },
    getLocationName: function(){
        var FBURL = "https://top100.firebaseio.com/";
        var ref = new Firebase(FBURL + 'locations/usa/west/utah/utahValley/provo');
        var locationName = ref.name();
        // console.log(locationName);
        return locationName;
    }
};
return deferred.promise;
});


//old service request
    // allPeople.on('value', function(recieved){
    //     var peopleRecieved = recieved.val();
    //     console.log("from peopleService: "+ peopleRecieved.toString());
    //     console.log(peopleRecieved);
    // });
    // return allPeople;
    // //

    // AngularJS will instantiate a singleton by calling "new" on this function
  // });




