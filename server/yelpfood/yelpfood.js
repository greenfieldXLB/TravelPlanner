const yelp = require('yelp-fusion');

var searchFood = function (searchCity, callback){


  var foodResult = [];

  var yelpKey = process.env.YELP_KEY;
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
