var mongoose = require('mongoose');
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || process.env.MONGODB_URI || 'mongodb://localhost/TravelPlanner';

mongoose.connect(uristring, function (err, res) {
  if (err) {
    console.log ('ERROR connecting to: ' + uristring + '. ' + err);
  } else {
    console.log ('Succeeded connected to: ' + uristring);
  }
});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  flights: Object,
  hotel: Object,
  attractions: Array,
  food: Array,
  weather: Object
});

var Item = mongoose.model('Item', itemSchema);

var saveToDatabase = function(data,callback) {
  Item.find({flights: data.flights, hotel: data.hotel, attractions: data.attractions, food: data.food}, (err, result) => {
    if (err) {
      callback(err, null);
    } else {
      if(result.length === 0) {
         var item = new Item;
         item.flights = data.flights;
         item.hotel = data.hotel;
         item.attractions = data.attractions;
         item.food = data.food;
         item.weather = data.weather;
         item.save(function(err, result) {
           if(err) {
             console.log('error saving to the db ', err);
             callback(err, null);
           } else {
             console.log('successfully saved a new record to the db ')
             callback(null, result);
           }
         })
      }
    }
  })
}

var deleteFromDatabase = function(id, callback){
  Item.remove({_id: id}, function(err){
     if(err) {
       return handleError(err);
     } else {
       console.log('deleted from db');
     }
  });
};


var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(null, items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.saveToDatabase =saveToDatabase;
module.exports.deleteFromDatabase =deleteFromDatabase;
