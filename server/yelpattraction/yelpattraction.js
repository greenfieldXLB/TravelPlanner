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

<<<<<<< HEAD

||||||| merged common ancestors
=======
<<<<<<< HEAD
>>>>>>> formatting in progress
  var yelpKey = process.env.YELP_KEY || yelpConfig.yelpKey;
  const client = yelp.client(yelpKey);
||||||| merged common ancestors

  const client = yelp.client(yelpConfig.yelpKey);
=======

  const client = yelp.client(yelpConfig.yelpkey);
>>>>>>> formatting in progress



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
