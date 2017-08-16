var request = require('request');
var config = require('../../config.js');

var requestGeolocation = function(location, callback) {
  var key = config.geolocationAPI;
  var geoUrl = 'https://maps.googleapis.com/maps/api/geocode/json?address='+ location + '&key=' + key;

  request(geoUrl, function (error, response, body) {
     callback(JSON.parse(body));
  });
}

module.exports.requestGeolocation = requestGeolocation;
