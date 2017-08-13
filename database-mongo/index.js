var mongoose = require('mongoose');
var uristring =
   process.env.MONGOLAB_URI ||
   process.env.MONGOHQ_URL ||
   'mongodb://localhost/TravelPlanner';

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

// var itemSchema = mongoose.Schema({
//   quantity: Number,
//   description: String
// });
//
// var Item = mongoose.model('Item', itemSchema);
//
// var selectAll = function(callback) {
//   Item.find({}, function(err, items) {
//     if(err) {
//       callback(err, null);
//     } else {
//       callback(null, items);
//     }
//   });
// };
//
// module.exports.selectAll = selectAll;
