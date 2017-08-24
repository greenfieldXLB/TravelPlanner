const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
  food: Array,
  attractions: Array,
  lodging: Array,
  destination: String,
  startDate: String,
  endDate: String
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
