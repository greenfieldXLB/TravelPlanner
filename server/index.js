

const express = require('express');
const bodyParser = require('body-parser');
// var GooglePlaces = require('google-places');

const items = require('../database-mongo');
const request = require('request');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hotel = require('./hotel/hotel')
const yelp = require('./yelp/yelp')



var express = require('express');
var bodyParser = require('body-parser');
// var GooglePlaces = require('google-places');
var items = require('../database-mongo');
var request = require('request');
var app = express();
var hotel = require('./hotel/hotel')

const express = require('express');
const bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
const items = require('../database-mongo');

const app = express();

const yelpfood = require('./yelpfood/yelpfood')


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/attraction', function(req,res){

  const attrLocation = req.body.location;

  yelp.searchAttr(attrLocation, function(attrResult){
    res.send(200, JSON.stringify(attrResult));
  })

})


app.get('/search', (req, res) => {
	console.log(req.query.city);
  // var city = req.query.city;


  hotel.hotel(req.query, (data) => {
    res.end(JSON.stringify(data))
  })
	// var query = req.query;
	// request(req.query, (err, res, body) => {
 //      // let result = JSON.parse(body)
 //      // console.log(result.results[0].photos)
 //      console.log(body);
	// })
})


app.post('/food', function (req, res){

  let location = '';

  req.on ('data', function(chunk){
    location += chunk;
  })

  req.on ('end', function(){

    yelpfood.searchFood(location, function(foodresult){

      res.send(200, JSON.stringify(foodresult));

    })


  })

})



app.get('/items', function (req, res) {
  items.selectAll(function(err, data) {
    if(err) {
      res.sendStatus(5000);
    } else {
      res.json(data);
    }
  });
});


var port = process.env.PORT;


app.listen(port, function() {
 console.log(`listening on port ${port}`)
});


