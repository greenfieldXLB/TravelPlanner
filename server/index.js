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
  var facebookId = data.facebookId;
  var tripId = data.id;

  Trip.findOne({id: tripId})
    .then((trip) => {
      if (trip) {
        return trip;
      } else {
        return new Trip();
      }
    })
    .then((trip) => {
      trip.id = data.id;
      trip.food = data.food;
      trip.attractions = data.attractions;
      trip.lodging = data.lodging;
      trip.destination = data.destination;
      trip.name = data.name;
      trip.description = data.description;
      trip.hidden = false;
      return trip.save()
    })
    .then(() => {
      return User.findOne({facebookId});
    })
    .then((user) => {
      return user.addTripId(tripId);
    })
    .then((user) => {
      Trip.getTrips(user, (fullUser) => {
        res.status(201).send(fullUser);
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

app.post('/removeTrip', (req, res) => {

  Trip.update({id: req.body.tripID}, {hidden: true})
    .then( (result) => {
      User.findOne({facebookId: req.body.facebookID})
      .then( (user) => {
        Trip.getTrips(user, (fullUser) => {
          res.status(201).send(fullUser);
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
