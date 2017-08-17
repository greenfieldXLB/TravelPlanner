var mongoose = require('mongoose');
var uristring = process.env.MONGOLAB_URI || process.env.MONGOHQ_URL || 'mongodb://localhost/TravelPlanner';

  mongoose.connect(uristring, function (err, res) {
    if (err) {
      console.log ('ERROR connecting to: ' + uristring + '. ' + err);
    } else {
      console.log ('Succeeded connected to: ' + uristring);
    }
  });
var itemSchema = mongoose.Schema({
});
mongoose.connect('mongodb://localhost/travelplanner' ,{useMongoClient: true});

var db = mongoose.connection;

db.on('error', function() {
  console.log('mongoose connection error');
});

db.once('open', function() {
  console.log('mongoose connected successfully');
});

var itemSchema = mongoose.Schema({
  flight: Object,
  hotel: Object,
  attraction: Array,
  food: Array,
  weather: Object
});

var Item = mongoose.model('Item', itemSchema);

var saveToDatabase = function(data,callback) {
  Item.find({flight: data.flight, hotel: data.hotel, attraction: data.attraction, food: data.food, weather: data.weather}, (err, result) =>{
     if(result.length === 0) {
        var item = new Item;
        item.flight = data.flight;
        item.hotel = data.hotel;
        item.attraction = data.attraction;
        item.food = data.food;
        item.weather = data.weather;
        item.save()
        callback(data)
     } else {
        callback(data)
     }
  })
}
      



var selectAll = function(callback) {
  Item.find({}, function(err, items) {
    if(err) {
      callback(err, null);
    } else {
      callback(items);
    }
  });
};

module.exports.selectAll = selectAll;
module.exports.saveToDatabase =saveToDatabase;

var sampledata = {
  flight: {depart: 'jfkfasf'},
  hotel: {name: 'motel'},
  attraction: [{name: 'abcd'}, {name: 'defghij'}],
  food:[{name: 'tacossdd'}, {name: 'buger'}],
  weather:{temperature: 30}
}



// saveToDatabase(sampledata, console.log);

// selectAll((items) => {console.log(1111, items)});
