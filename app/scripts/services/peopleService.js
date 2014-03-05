'use strict';

angular.module('100App').factory('peopleService', function peopleService($q, $firebase){

///////////////////////////
//get data by location
///////////////////////////
return {
    getPeople: function () {
        var FBURL = "https://top100.firebaseio.com/";
        var ref = new Firebase(FBURL + 'locations/usa/west/utah/utahValley/provo');
        ref.on('value', function(received) {
            var ref = received.val();
            console.log('got all people', ref);
        })
        return $firebase(ref);
    }
};

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




