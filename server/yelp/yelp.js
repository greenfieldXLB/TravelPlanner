const yelp = require('yelp-fusion');

const clientId = '3GcYlGCJQgbIdH-g4wIgQA';

const clientSecret = 'M7ohQo779fWVHpLxBl4va1v7NOqvRd2hKucOViD654E63wN7Mv6IZGnF45Hoxbzb';

 
const token = yelp.accessToken(clientId, clientSecret).then(response => {
  console.log(response.jsonBody.access_token);
}).catch(e => {
  console.log(e);
});

const client = yelp.client(token);
 
searchAttr (searchCity, callback) => {

  client.search({
  term:'Attractions',
  location: searchCity,
  })
  .then(response => {
    console.log(response.jsonBody.businesses[0]);
    callback(response.jsonBody.businesses);
  })
  .catch(e => {
    console.log(e);
  });

}

module.exports = yelp;
