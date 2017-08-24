const yelp = require('yelp-fusion');
const request = require('request');
const yelpConfig = require('../../config.js');


var findHotels = function (input, callback){

  var yelpKey = process.env.YELP_KEY || yelpConfig.yelpKey;
  var client = yelp.client(yelpKey);

  var p1 = new Promise(
    (resolve,reject) => {
      client.search({
        term: 'hotels',
        location: input.location,
        limit: 4,
        price: "1"
      }).then( ( response )=>resolve( response ) );
    }
  );

  var p2 = new Promise(
    (resolve,reject) => {
      client.search({
        term: 'hotels',
        location: input.location,
        limit: 4,
        price: "2"
      }).then( ( response )=>resolve( response ) );
    }
  );

  var p3 = new Promise(
    (resolve,reject) => {
      client.search({
        term: 'hotels',
        location: input.location,
        limit: 4,
        price: "3"
      }).then( ( response )=>resolve( response ))
    }
  );

  Promise.all([p1,p2,p3]).then(responses => {

    hotelResult = responses.reduce(function( businessList, response){
      businessList.push( ... response.jsonBody.businesses );
      return businessList;
    }, [] );

    callback(hotelResult);

  })
  .catch(e => {
    console.log(e);
  });
}

module.exports.findHotels = findHotels;
