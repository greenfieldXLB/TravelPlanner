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


module.exports.selectAll = selectAll;
