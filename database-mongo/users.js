const mongoose = require('mongoose');
mongoose.Promise = require('bluebird');

const userSchema = mongoose.Schema({
  name: String,
  email: String,
  facebookId: String,
  trips: Array
});

userSchema.set('minimize', false);

userSchema.statics.findOrCreate = (userData) => {
  let facebookId = userData.facebookId;

  return User.findOne({facebookId})
    .then((user) => {
      if (user) {
        return user;
      } else {
        throw 'User not found';
      }
    })
    .catch((err) => {
      if (err.toString() !== 'User not found') {
        throw(err);
      }

      var user = new User({
        facebookId: facebookId,
        name: userData.name,
        email: userData.email,
        trips: []
      });

      return user.save();
    });
};

const User = mongoose.model('User', userSchema);

module.exports = User;
