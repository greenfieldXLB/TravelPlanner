const express = require('express');
const bodyParser = require('body-parser');
// UNCOMMENT THE DATABASE YOU'D LIKE TO USE
// var items = require('../database-mysql');
const items = require('../database-mongo');
const yelp = require('./yelp/yelp')

const app = express();

// UNCOMMENT FOR REACT
app.use(express.static(__dirname + '/../react-client/dist'));

// UNCOMMENT FOR ANGULAR
// app.use(express.static(__dirname + '/../angular-client'));
// app.use(express.static(__dirname + '/../node_modules'));
var attrResultFromSearch;

app.post('/attraction', function(req,res){

  var searchCity = '';

  req.on('data', function(chunk){
    searchCity += chunk;
  })
  
  req.on('end', function(){
    
    yelp.searchAttr(searchCity, function(attrResult){
      //res.sendStatus(200);
      res.send(200, JSON.stringify(attrResult));
      //console.log('STRING RESULT: ',JSON.stringify(attrResult)) --Y;
      //console.log('RESULT DATA: ', attrResult) -- Y;
      //console.log(Array.isArray(attrResult)) --Y;
      //console.log('GOT STH for POST!!!') -- Y
    })

  })

})

app.get('/attraction', function (req, res) {
  
});

app.listen(3000, function() {
  console.log('listening on port 3000!');
});
