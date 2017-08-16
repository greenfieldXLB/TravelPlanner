const yelp = require('yelp-fusion');
const yelpConfig = require('../../config.js');


var searchAttr = function (searchCity, callback){
  var attrResult = {};

  const clientId = yelpConfig.clientId;

  const clientSecret = yelpConfig.clientSecret;

  const token = yelp.accessToken(clientId, clientSecret).then(response => {

    console.log('TOKEN ', response.jsonBody.access_token);
  }).catch(e => {
    console.log('ERROR ', e);
  });


  const client = yelp.client(yelpConfig.yelpkey);

  client.search({
    term:'Attractions',
    location: searchCity,
    limit: 12
  })

  .then(response => {
    console.log('YELP RES ', response.jsonBody.businesses[0]);
    attrResult = response.jsonBody.businesses;
    console.log(Array.isArray(attrResult));
    callback(attrResult);
  })

  .catch(e => {
    console.log(e);
  });

}

module.exports.searchAttr = searchAttr;
