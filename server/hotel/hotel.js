const yelp = require('yelp-fusion');
const request = require('request');
const yelpConfig = require('../../config.js');
const _ = require('lodash');


var findHotels = function (input, callback){

  var yelpKey = process.env.YELP_KEY || yelpConfig.yelpKey;
  var client = yelp.client(yelpKey);

  var p1 = new Promise(
    (resolve,reject) => {
      client.search({
        term: 'hotels',
        location: input.location,
        limit: 20,
        price: "1",
        sort_by: 'rating'
      }).then( (response) => resolve(response) );
    }
  );

  var p2 = new Promise(
    (resolve,reject) => {
      client.search({
        term: 'hotels',
        location: input.location,
        limit: 20,
        price: "2",
        sort_by: 'rating'
      }).then( (response) => resolve(response) );
    }
  );

  var p3 = new Promise(
    (resolve,reject) => {
      client.search({
        term: 'hotels',
        location: input.location,
        limit: 20,
        price: "3",
        sort_by: 'rating'
      }).then( (response) => resolve(response) );
    }
  );

  var getFiltered = new Promise(
    (resolve, reject) => {
      client.search({
        term: 'hotels ' + input.search,
        location: input.location,
        limit: 60,
        price: input.price,
        sort_by: 'rating'
      }).then( (response) => resolve(response) );
    }
  );

  if (input.price || input.search) {

    getFiltered.then( response => {

      callback(response.jsonBody.businesses);

    })
    .catch(e => {
      console.log(e);
    });

  } else {

    Promise.all([p1,p2,p3]).then( responses => {

      hotelResult = responses.reduce( function(businessList, response) {
        businessList.push( ... response.jsonBody.businesses );
        return _.shuffle(businessList);
      }, []);

      callback(hotelResult);

    })
    .catch(e => {
      console.log(e);
    });

  }

}

module.exports.findHotels = findHotels;
