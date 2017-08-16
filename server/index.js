const express = require('express');
const bodyParser = require('body-parser');
const items = require('../database-mongo');
const request = require('request');
const app = express();
const hotel = require('./hotel/hotel')
const yelpattr = require('./yelpattraction/yelpattraction')
const yelpfood = require('./yelpfood/yelpfood')


app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));


app.post('/attraction', function(req,res){

  const attrLocation = req.body.location;

  yelpattr.searchAttr(attrLocation, function(attrResult){
    res.send(200, JSON.stringify(attrResult));
  })

})


app.get('/hotels', (req, res) => {


  hotel.hotel(req.query, (data) => {
    res.end(JSON.stringify(data))
  })
})


app.post('/food', function (req, res){

  let location = req.body.location;


  yelpfood.searchFood(location, function(foodresult){
    res.send(200, JSON.stringify(foodresult));

  });

});


var port = process.env.PORT;

app.listen(port, function() {
 console.log(`listening on port ${port}`)
});


