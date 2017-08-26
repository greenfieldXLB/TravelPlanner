const yelp = require('yelp-fusion');
<<<<<<< HEAD

let yelpConfig;
try {
  yelpConfig = require('../../config.js');
} catch(e) {
  yelpConfig = undefined;
}
=======
const yelpConfig = require('../../config.js');
const _ = require('lodash');
>>>>>>> (feat) Put add/remove button on preview component

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
    limit: 30
  })
  .then(response => {
    attractions = response.jsonBody.businesses;
    callback(_.shuffle(attractions));
  })
  .catch(e => {
    console.log(e);
  });
}

module.exports.findAttractions = findAttractions;
