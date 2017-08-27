const mongoose = require('mongoose');

const tripSchema = mongoose.Schema({
  id: Number,
  food: Array,
  attractions: Array,
  lodging: Array,
  destination: String,
  name: String,
  description: String,
  hidden: Boolean
});

tripSchema.statics.getTrips = function(user, callback) {
  console.log('we made it to the trips schema!');
  this.find({
    "id": {"$in" : user.trips}
  })
  .then( (trips) => {
    user.trips = trips;
    callback(user);
  })
};

const Trip = mongoose.model('Trip', tripSchema);

module.exports = Trip;

