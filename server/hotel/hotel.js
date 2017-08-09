const yelp = require('yelp-fusion');
const request = require('request');

var hotel = function (city, callback){
  var attrResult = {};

  const clientId = '3u_Cx8hQVNRMC9FqysUUZw';

  const clientSecret = 'A5k8Ks7zMF04hYG2vIfxuNlfQKN1W7U12usgrcssJ9W0u3sXPESVGhA0GxOjez2j';

  const token = yelp.accessToken(clientId, clientSecret)
  .then(response => {
    //return response.jsonBody.access_token;
    // console.log('TOKEN ', response.jsonBody.access_token);
    return response.jsonBody.access_token;
  })
  .then((data) => {
  	// console.log(2222, data)
  	return yelp.client(data) //object of yelp, string, number
  })
  .then(data => {
  	// console.log(data);
   return data.search({
   	term:'hotel',
    location: city,
    limit: 1	
  	})
  })
  .then(response => {
  	console.log(response.jsonBody.businesses[0])
  })
  .catch(e => {
    console.log('ERROR ', e);
  });
}

module.exports.hotel = hotel;