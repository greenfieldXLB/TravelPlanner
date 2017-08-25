const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
  id: Number,
  food: Array,
  attractions: Array,
  lodging: Array,
  destination: String,
  startDate: String,
  endDate: String
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
