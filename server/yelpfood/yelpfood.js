const yelp = require('yelp-fusion');
const yelpConfig = require('../../config.js');

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


  var p1 = new Promise(
    (resolve,reject) => {
      client.search({
        term: 'Restaurant',
        location: input.location,
        limit: 7,
        price: "1"
      }).then( (response) => resolve(response) );
    }
  );

  var p2 = new Promise(
    (resolve,reject) => {
      client.search({
        term: 'Restaurant',
        location: input.location,
        limit: 7,
        price: "2"
      }).then( (response) => resolve(response) );
    }
  );

  var p3 = new Promise(
    (resolve,reject) => {
      client.search({
        term: 'Restaurant',
        location: input.location,
        limit: 7,
        price: "3"
      }).then( (response) => resolve(response) );
    }
  );

  var selectedPrice = new Promise(
    (resolve, reject) => {
      client.search({
        term: 'Restaurant',
        location: input.location,
        limit: 21,
        price: input.price
      }).then( (response) => resolve(response) );
    }
  );

  if (input.price) {

    Promise.resolve(selectedPrice).then( response => {

      callback(response.jsonBody.businesses);

    })
    .catch(e => {
      console.log(e);
    })

  } else {

    Promise.all([p1,p2,p3]).then(responses => {

      restaurants = responses.reduce( function(businessList, response) {
        businessList.push( ... response.jsonBody.businesses );
        return businessList;
      }, []);

      callback(restaurants);

    })
    .catch(e => {
      console.log(e);
    });

  }

}

module.exports.findRestaurants = findRestaurants;
