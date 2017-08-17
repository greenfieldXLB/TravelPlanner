const yelp = require('yelp-fusion');
const yelpConfig = require('../../config.js');

var searchFood = function (searchCity, callback){


  var foodResult = [];

  const clientId = yelpConfig.clientId;

  const clientSecret = yelpConfig.clientSecret;


  const token = yelp.accessToken(clientId, clientSecret).then(response => {
    // console.log('TOKEN ', response.jsonBody.access_token);
  }).catch(e => {
    console.log('ERROR ', e);
  });



  var yelpKey = process.env.YELP_KEY || yelpConfig.yelpKey;
  const client = yelp.client(yelpKey);

  const client = yelp.client(yelpConfig.yelpkey);

  var yelpKey = process.env.YELP_KEY || yelpConfig.yelpKey;
  const client = yelp.client(yelpKey);


  var p1 = new Promise(
    (resolve,reject) => {
      client.search({
        term:'Restaurant',
        location: searchCity,
        limit: 4,
        price: "1"
      }).then( ( response )=>resolve( response ) );
    }
  );

  var p2 = new Promise(
    (resolve,reject) => {
      client.search({
        term:'Restaurant',
        location: searchCity,
        limit: 4,
        price: "2"
      }).then( ( response )=>resolve( response ) );
    }
  );

  var p3 = new Promise(
    (resolve,reject) => {
      client.search({
        term:'Restaurant',
        location: searchCity,
        limit: 4,
        price: "3"
      }).then( ( response )=>resolve( response ))
    }
  );

  Promise.all([p1,p2,p3]).then(responses => {
    //console.log(JSON.stringify(responses, null, 2 ) );

    foodResult = responses.reduce(function( businessList, response){
      businessList.push( ... response.jsonBody.businesses );
      return businessList;
    }, [] );

    callback(foodResult);

  })
  .catch(e => {
    console.log(e);
  });

}

module.exports.searchFood = searchFood;
