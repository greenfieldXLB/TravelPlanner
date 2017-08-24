const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mongo');
const request = require('request');
const app = express();
const hotels = require('./hotel/hotel')
const attractions = require('./yelpattraction/yelpattraction')
const food = require('./yelpfood/yelpfood')

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/hotels', (req, res) => {
  // console.log('reached server for /hotels : ', req.query);
  hotels.findHotels(req.query, (hotels) => {
    res.status(200).send({tag: 'hotels', data: hotels});
  });
});

app.get('/attractions', (req, res) => {
  // console.log('reached server /attractions : ', req.query);
  attractions.findAttractions(req.query, (attractions) => {
    res.status(200).send({tag: 'attractions', data: attractions});
  });
});

app.get('/food', (req, res) => {
  // console.log('reached server /food : ', req.query);
  food.findRestaurants(req.query, (restaurants) => {
    res.status(200).send({tag: 'restaurants', data: restaurants});
  });
});

// app.post('/attraction', function(req,res){
//   const attrLocation = req.body.location;
//   yelpattr.searchAttr(attrLocation, function(attrResult){
//     res.send(200, JSON.stringify(attrResult));
//   })
// })

// app.get('/hotels', (req, res) => {
//   hotel.hotel(req.query, (data) => {
//     res.end(JSON.stringify(data))
//   })
// })

// app.post('/food', function (req, res){
//   let location = req.body.location;
//   yelpfood.searchFood(location, function(foodresult){
//     res.send(200, JSON.stringify(foodresult));
//   });
// });

app.post('/save', (req, res) => {
  var data = JSON.parse(req.body.data);
  items.saveToDatabase(data, function(err, result) {
    if(err) {
      console.log('server received database error when saving a record');
    } else {
      res.sendStatus(200);
    }
  })
});

app.post('/removeRecord', (req, res) => {
   var id = req.body.uniqueID;
   items.deleteFromDatabase(id);
   res.sendStatus(200);
});

app.get('/getAll', (req, res) => {
  items.selectAll(function(err, result) {
    if(err) {
      console.log('server received database error when retrieving records');
    } else {
      res.send(result);
    }
  })
});


var port = process.env.PORT || 3000;

app.listen(port, function() {
  console.log(`listening on port ${port}`);
})
