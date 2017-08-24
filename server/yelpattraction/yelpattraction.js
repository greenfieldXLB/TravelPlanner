const yelp = require('yelp-fusion');
const yelpConfig = require('../../config.js');


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
    term:'Attractions',
    location: input.location,
    limit: 12
  })

  .then(response => {
    attractions = response.jsonBody.businesses;
    callback(attractions);
  })

  .catch(e => {
    console.log(e);
  });

}

module.exports.findAttractions = findAttractions;
