var express = require('express');
var bodyParser = require('body-parser');
// var GooglePlaces = require('google-places');
var items = require('../database-mongo');
var request = require('request');
var app = express();
var hotel = require('./hotel/hotel')

app.use(express.static(__dirname + '/../react-client/dist'));
app.use(bodyParser.urlencoded({ extended: false }));


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
<<<<<<< HEAD
  console.log(`listening on port ${port}`);
=======
  console.log('listening on port 3000!');
>>>>>>> update for heroku
});
