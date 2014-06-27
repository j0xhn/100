'use strict';

angular.module('100App').factory('peopleService', function peopleService($q, $firebase){
var deferred = $q.defer();
var FBURL = "https://top100.firebaseio.com/";
///////////////////////////
//get data by location
///////////////////////////
return {
    getCurator: function () {
        var adminID = 100000478960804;
        var curator = new Firebase(FBURL + "provo/" + adminID);
        return curator;
    },

    getPeople: function () {
        var ref = new Firebase(FBURL + 'golf');
        // console.log(ref);
        return $firebase(ref);

    },
    getLocationName: function(){
        var ref = new Firebase(FBURL + 'locations/usa/west/utah/utahValley/provo');
        var locationName = ref.name();
        // console.log(locationName);
        return locationName;
    },

    loginPrompt: function(){
      console.log('you clicked login');
        $('body').toggleClass('modal-open-up');
    },
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




