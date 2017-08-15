const yelp = require('yelp-fusion');
const request = require('request');
var clinet;
var hotel = function (info, callback){
  // var hotels = [];

  const clientId = '3u_Cx8hQVNRMC9FqysUUZw';

  const clientSecret = 'A5k8Ks7zMF04hYG2vIfxuNlfQKN1W7U12usgrcssJ9W0u3sXPESVGhA0GxOjez2j';

  const token = yelp.accessToken(clientId, clientSecret)
  .then(response => {
    return response.jsonBody.access_token;
  })
  .then(data => {
    // console.log(data)
  	client = yelp.client(data);
    return client
  })
  .catch(e => {
    console.log(e);
  });

  var p1 = new Promise(
    (resolve,reject) => {
      client.search({
        term:'hotels',
        location: info.city,
        limit: 4,
        price: "1"
      }).then( ( response )=>resolve( response ) );
    }
  );

  var p2 = new Promise(
    (resolve,reject) => {
      client.search({
        term:'hotels',
        location: info.city,
        limit: 4,
        price: "2"
      }).then( ( response )=>resolve( response ) );
    }
  );

  var p3 = new Promise(
    (resolve,reject) => {
      client.search({
        term:'Restaurant',
        location: info.city,
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

    console.log('FOOD IS: ',foodResult);
    callback(foodResult);
    
  })
  .catch(e => {
    console.log(e);
  });
}

module.exports.hotel = hotel;