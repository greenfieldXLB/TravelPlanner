const yelp = require('yelp-fusion');
const yelpConfig = require('../../config.js');


var searchAttr = function (searchCity, callback){
  var attrResult = {};

  const clientId = yelpConfig.clientId;

  const clientSecret = yelpConfig.clientSecret;

  const token = yelp.accessToken(clientId, clientSecret).then(response => {
    // console.log('TOKEN ', response.jsonBody.access_token);
  }).catch(e => {
    console.log('ERROR ', e);
  });


  var yelpKey = process.env.YELP_KEY || yelpConfig.yelpKey;
  const client = yelp.client(yelpKey);

  client.search({
    term:'Attractions',
    location: searchCity,
    limit: 12
  })

  .then(response => {
    attrResult = response.jsonBody.businesses;
    callback(attrResult);
  })

  .catch(e => {
    console.log(e);
  });

}

module.exports.searchAttr = searchAttr;
