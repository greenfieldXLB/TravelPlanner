var request = require('request');
var config = require('../../config.js');

var requestWeather = function(geoCode, date, callback) {
  var secretKey = process.env.WEATHER_API || config.darkskyAPI;
  var unixTime = new Date(date).getTime() / 1000
  var weatherUrl = 'https://api.darksky.net/forecast/' + secretKey + '/' + geoCode.lat + ',' + geoCode.lng + ',' + unixTime + '?exclude=currently,minutely,hourly,flags'

  request(weatherUrl, function (error, response, body) {
    callback(body);
  });
}

module.exports.requestWeather = requestWeather;
