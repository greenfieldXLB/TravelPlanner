const yelp = require('yelp-fusion');
//const config = require('../config.js');

var searchFood = function (searchCity, callback){


  var foodResult = [];

  const clientId = '3GcYlGCJQgbIdH-g4wIgQA';

  const clientSecret = 'M7ohQo779fWVHpLxBl4va1v7NOqvRd2hKucOViD654E63wN7Mv6IZGnF45Hoxbzb';

 
  const token = yelp.accessToken(clientId, clientSecret).then(response => {
    //return response.jsonBody.access_token;
    //console.log('TOKEN ', response.jsonBody.access_token);
  }).catch(e => {
    console.log('ERROR ', e);
  });
  //'v2NdlEqwhnXc5yzlHQ6T6o5t0NmSperOsg7wmyMEpaIAV7_7CCx_jL41zskRGHKXJAgkrX8ocuvm6E39mbgdCH6F9W-ZijDrvkBfstXivjVVglGdvXi4_Nx9HwGKWXYx'

  const client = yelp.client('v2NdlEqwhnXc5yzlHQ6T6o5t0NmSperOsg7wmyMEpaIAV7_7CCx_jL41zskRGHKXJAgkrX8ocuvm6E39mbgdCH6F9W-ZijDrvkBfstXivjVVglGdvXi4_Nx9HwGKWXYx');

  //search for $ price
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

module.exports.searchFood = searchFood;

