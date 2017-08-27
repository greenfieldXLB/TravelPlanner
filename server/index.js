const express = require('express');
const bodyParser = require('body-parser');
const db = require('../database-mongo');
const request = require('request');
const app = express();
const hotels = require('./hotel/hotel')
const attractions = require('./yelpattraction/yelpattraction')
const food = require('./yelpfood/yelpfood')
const User = require('../database-mongo/users')
const Trip = require('../database-mongo/trips')

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.json());

app.get('/hotels', (req, res) => {
  console.log('hotels', req.query);
  hotels.findHotels(req.query, (hotels) => {
    res.status(200).send({tag: 'hotels', data: hotels});
  });
});

app.get('/attractions', (req, res) => {
  console.log('attractions:', req.query);
  attractions.findAttractions(req.query, (attractions) => {
    res.status(200).send({tag: 'attractions', data: attractions});
  });
});

app.get('/food', (req, res) => {
  console.log('food', req.query);
  food.findRestaurants(req.query, (restaurants) => {
    res.status(200).send({tag: 'restaurants', data: restaurants});
  });
});

app.post('/save', (req, res) => {
  var data = req.body;
  console.log(data.id);
  var facebookId = data.facebookId;
  var tripId = data.id;
  let newTrip = new Trip;
  newTrip.id = data.id;
  newTrip.food = data.food;
  newTrip.attractions = data.attractions;
  newTrip.lodging = data.lodging;
  newTrip.destination = data.destination;
  newTrip.name = data.name;
  newTrip.description = data.description;
  newTrip.save(err => {
  if (err) {
    throw err;
  } else {
    console.log('Data successfully saved');
    }
  }).then(() => {
  User.findOne({facebookId})
    .then((user) => {
      return user.addTripId(tripId);
    }).then((user) => {
      Trip.getTrips(user, (fullUser) => {
        res.status(200).send(fullUser);
      });
    });
  });
});



// When we want to find multiple values at once in Mongo, we can use the following command:

// To grab the trips array from the user, we can use code similar to the following:  
//   db.users.findOne({facebookId: "3713212263907"}).trips
//   db.trips.find({"id" : {"$in" : [634827565, 14978997, 954501575]}})

app.post('/removeRecord', (req, res) => {
   var id = req.body.uniqueID;
   db.deleteFromDatabase(id);
   res.sendStatus(200);
});

app.get('/getAll', (req, res) => {
  db.selectAll(function(err, result) {
    if(err) {
      console.log('server received database error when retrieving records');
    } else {
      res.send(result);
    }
  })
});

app.post('/logIn', (req, res) => {
  User.findOrCreate(req.body)
    .then((user) => {
      Trip.getTrips(user, (fullUser) => {
        res.json(fullUser);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
