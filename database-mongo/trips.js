const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
  id: Number,
  food: Array,
  attractions: Array,
  lodging: Array,
  destination: String
});

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;
