const yelp = require('yelp-fusion');
const request = require('request');

var hotel = function (info, callback){
  var hotels = [];

  const clientId = '3u_Cx8hQVNRMC9FqysUUZw';

  const clientSecret = 'A5k8Ks7zMF04hYG2vIfxuNlfQKN1W7U12usgrcssJ9W0u3sXPESVGhA0GxOjez2j';

  const token = yelp.accessToken(clientId, clientSecret)
  .then(response => {
    return response.jsonBody.access_token;
  })
  .then((data) => {
  	return yelp.client(data) 
  })
  .then(data => {
  	// console.log(data);
   return data.search({
   	term:'hotel',
    location: info.city,
    price: info.price,
    limit: 4	
  	})
  })
  .then(response => {
    console.log(response.jsonBody.businesses)
    callback(response.jsonBody.businesses)
  })
  .then(data =>{
    console.log(1111, data)
  })
  .catch(e => {
    console.log(e);
  });
}

module.exports.hotel = hotel;