

const express = require('express');

var express = require('express');
var request = require('request');
var hotel = require('./hotel/hotel')


const bodyParser = require('body-parser');

// var GooglePlaces = require('google-places');
const items = require('../database-mongo');
const request = require('request');
const app = express();
const hotel = require('./hotel/hotel')



// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');

const items = require('../database-mongo');
const yelp = require('./yelp/yelp')

const yelp = require('./yelp')




app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));



// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));

// var places = new GooglePlaces('AIzaSyDM-RnDOk60Kj_ZJ2xUx29RrZKnutnI2UI');
// places.search({keyword: 'Vermonster'}, function(err, response) {
//   console.log("search: ", response.results);

//   places.details({reference: response.results[0].reference}, function(err, response) {
//     console.log("search details: ", response.result.website);
//     // search details:  http://www.vermonster.com/
//   });
// });
// var parameters = {
//       location: '-33.8670522,151.1957362',
//       radius: '500',
//       type: 'restaurant',
//       key:'AIzaSyDM-RnDOk60Kj_ZJ2xUx29RrZKnutnI2UI'
//     }

var attrResultFromSearch;


app.post('/attraction', function(req,res){


app.post('/attract', function(req,res){

  var searchCity = '';
  const attraction = req.body.attraction;

  yelp.searchAttr(attraction, function(attrResult){
    res.send(200, JSON.stringify(attrResult));
    //console.log('STRING RESULT: ',JSON.stringify(attrResult)) --Y;
    //console.log('RESULT DATA: ', attrResult) -- Y;
    //console.log(Array.isArray(attrResult)) --Y;
    //console.log('GOT STH for POST!!!')

  })

  // req.on('data', function(chunk){
  //   searchCity += chunk;
  //   console.log('data');
  // })
  
  // req.on('end', function(){
  //   console.log('CITY IS, ',searchCity)
    
  //   yelp.searchAttr(searchCity, function(attrResult){

  //     res.send(200, JSON.stringify(attrResult));
  //     //console.log('STRING RESULT: ',JSON.stringify(attrResult)) --Y;
  //     //console.log('RESULT DATA: ', attrResult) -- Y;
  //     //console.log(Array.isArray(attrResult)) --Y;
  //     //console.log('GOT STH for POST!!!')
  //   })
  // })
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
app.listen(port, function() {
  console.log(`listening on port ${port}`);


app.listen(3000, function() {
  console.log('listening on port 3000!');


});

})

