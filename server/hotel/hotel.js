const yelp = require('yelp-fusion');
const request = require('request');

let yelpConfig;

try {
  yelpConfig = require('../../config.js');
} catch(e) {
  yelpConfig = undefined;
}

const _ = require('lodash');

var findHotels = function (input, callback){

  var yelpKey = process.env.YELP_KEY || yelpConfig.yelpKey;
  var client = yelp.client(yelpKey);

  let p1 = client.search({
    term: 'hotels',
    location: input.location,
    limit: 25,
    price: "1",
    sort_by: 'rating'
  })

  let p2 = client.search({
    term: 'hotels',
    location: input.location,
    limit: 25,
    price: "2",
    sort_by: 'rating'
  })

  let p3 = client.search({
    term: 'hotels',
    location: input.location,
    limit: 25,
    price: "3",
    sort_by: 'rating'
  })

  var getFiltered = client.search({
    term: 'hotels ' + (input.search || ''),
    location: input.location,
    limit: 50,
    price: input.price,
    sort_by: 'rating'
  });

  if (input.price || input.search) {
    let filteredResults = [];
    getFiltered.then( response => {
      response.jsonBody.businesses.forEach(hotel => {
        if (hotel.rating > 3 && hotel.review_count > 5) {
          filteredResults.push(hotel);
        }
      });
      callback(filteredResults);

    })
    .catch(e => {
      console.log(68, e);
    });

  } else {

    Promise.all([p1, p2, p3]).then( responses => {
      let hotelResult = responses.reduce( function(businessList, response) {
        businessList.push( ... response.jsonBody.businesses );
        return _.shuffle(businessList);
      }, []);

      let filteredResults = [];
      hotelResult.forEach(hotel => {
        if (hotel.rating > 3 && hotel.review_count > 5) {
          filteredResults.push(hotel);
        }
      });

      callback(filteredResults);

    })
    .catch(e => {
      console.log(e);
    });

  }

}

module.exports.findHotels = findHotels;
