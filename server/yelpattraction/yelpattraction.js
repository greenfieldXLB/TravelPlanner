const yelp = require('yelp-fusion');

var searchAttr = function (searchCity, callback){
  var attrResult = {};

  var yelpKey = process.env.YELP_KEY;
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
