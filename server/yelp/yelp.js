const yelp = require('yelp-fusion');
//const config = require('../config.js');
 
var searchAttr = function (searchCity, callback){

  const clientId = '3GcYlGCJQgbIdH-g4wIgQA';

  const clientSecret = 'M7ohQo779fWVHpLxBl4va1v7NOqvRd2hKucOViD654E63wN7Mv6IZGnF45Hoxbzb';

 
  const token = yelp.accessToken(clientId, clientSecret).then(response => {
    //return response.jsonBody.access_token;
    console.log('TOKEN ', response.jsonBody.access_token);
  }).catch(e => {
    console.log('ERROR ', e);
  });
  //'v2NdlEqwhnXc5yzlHQ6T6o5t0NmSperOsg7wmyMEpaIAV7_7CCx_jL41zskRGHKXJAgkrX8ocuvm6E39mbgdCH6F9W-ZijDrvkBfstXivjVVglGdvXi4_Nx9HwGKWXYx'

  const client = yelp.client('v2NdlEqwhnXc5yzlHQ6T6o5t0NmSperOsg7wmyMEpaIAV7_7CCx_jL41zskRGHKXJAgkrX8ocuvm6E39mbgdCH6F9W-ZijDrvkBfstXivjVVglGdvXi4_Nx9HwGKWXYx');

  client.search({
    term:'Attractions',
    location: searchCity,
    limit: 10
  })

  .then(response => {
    console.log('YELP RES ', response.jsonBody.businesses[0]);
    console.log('LIMIT IS ', response.jsonBody.businesses.length);
    callback(response.jsonBody.businesses);
  })

  .catch(e => {
    console.log(e);
  });

}

module.exports.searchAttr = searchAttr;
