const yelp = require('yelp-fusion');

let yelpConfig;
try {
  yelpConfig = require('../../config.js');
} catch(e) {
  yelpConfig = undefined;
}

const _ = require('lodash');

var findRestaurants = function (input, callback){
  var restaurants = [];
  const clientId = process.env.YELP_ID || yelpConfig.clientId;
  const clientSecret = process.env.YELP_SECRET || yelpConfig.clientSecret;
  const token = yelp.accessToken(clientId, clientSecret).then(response => {
    // console.log('TOKEN ', response.jsonBody.access_token);
  }).catch(e => {
    console.log('ERROR ', e);
  });
  var yelpKey = process.env.YELP_KEY || yelpConfig.yelpKey;
  const client = yelp.client(yelpKey);

  let p1 = client.search({
    term: 'Restaurant',
    location: input.location,
    limit: 20,
    price: "1",
    sort_by: 'rating'
  });

  let p2 = client.search({
    term: 'Restaurant',
    location: input.location,
    limit: 20,
    price: "2",
    sort_by: 'rating'
  });

  let p3 = client.search({
    term: 'Restaurant',
    location: input.location,
    limit: 20,
    price: "3",
    sort_by: 'rating'
  });

  let getFiltered = client.search({
    term: 'Restaurant ' + (input.search || ''),
    location: input.location,
    limit: 50,
    price: input.price,
    sort_by: 'rating'
  });

  if (input.price || input.search) {
    getFiltered.then( response => {
      callback(response.jsonBody.businesses);
    })
    .catch(e => {
      console.log(e);
    })
  } else {
    Promise.all([p1,p2,p3]).then(responses => {
      restaurants = responses.reduce( function(businessList, response) {
        businessList.push( ... response.jsonBody.businesses );
        return _.shuffle(businessList);
      }, []);
      callback(restaurants);
    })
    .catch(e => {
      console.log(e);
    });
  }
}

module.exports.findRestaurants = findRestaurants;
