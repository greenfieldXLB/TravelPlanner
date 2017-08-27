const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
  id: Number,
  food: Array,
  attractions: Array,
  lodging: Array,
  destination: String
});

tripSchema.statics.getTrips = function(tripArray) {
  console.log('we made it to the trips schema!');
  return this.find({"id": {"$in" : tripArray}})
};

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;

