
const items = require('../database-mongo');
const request = require('request');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const hotel = require('./hotel/hotel')
const yelp = require('./yelp/yelp')



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



var port = process.env.PORT;


app.listen(3000, function() {
  console.log('listening on port 3000!');
});


