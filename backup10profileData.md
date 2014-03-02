var peopleArray = [
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
    "thread": [
      {"User": "First Message Goes Here"},
      {"SecondUser":"Second Message Goes Here"},
    ],
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

    ];
    
    
    for (var i = 0; i<peopleArray.length; i++){
      var dataBase = new Firebase ('https://top100.firebaseio.com/people/' + i.toString());
      dataBase.set(peopleArray[i]);
    };


        var people = new Firebase("https://top100.firebaseio.com/locations/usa/west/utah/utahValley/provo");
    people.on('value', function(peopleRecieved){
        $scope.people = peopleRecieved.val();
        console.log($scope.people);
    });
    