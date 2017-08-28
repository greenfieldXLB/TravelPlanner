const yelp = require('yelp-fusion');
const _ = require('lodash');

let yelpConfig;
try {
  yelpConfig = require('../../config.js');
} catch(e) {
  yelpConfig = undefined;
}

var findAttractions = function (input, callback){
  var attractions = {};

  const clientId = process.env.YELP_ID || yelpConfig.clientId;

  const clientSecret = process.env.YELP_SECRET || yelpConfig.clientSecret;

  const token = yelp.accessToken(clientId, clientSecret).then(response => {
    // console.log('TOKEN ', response.jsonBody.access_token);
  }).catch(e => {
    console.log('ERROR ', e);
  });

  var yelpKey = process.env.YELP_KEY || yelpConfig.yelpKey;
  const client = yelp.client(yelpKey);

  client.search({
    term:'Attractions ' + (input.search || ''),
    location: input.location,
    limit: 50
  })
  .then(response => {
    attractions = response.jsonBody.businesses;
    let filteredResults = [];
      attractions.forEach(attraction => {
        if (attraction.rating > 3) {
          filteredResults.push(attraction);
        }
      });
    callback(_.shuffle(filteredResults));
  })
  .catch(e => {
    console.log(e);
  });
}

module.exports.findAttractions = findAttractions;
