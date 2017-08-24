const mongoose = require('mongoose');
const Promise = require('bluebird');
mongoose.Promise = Promise;
const User = require('../database-mongo/users');
const expect = require('chai').expect;

mongoose.connect('mongodb://localhost/travelplanner-test');

describe('Users', function() {
  beforeEach(function(done) {
    User.remove().then(() => {
      done();
    });
  });

  it('Can create users', function(done) {
    let u1 = User.findOrCreate({facebookId: '1', name: 'Neal'});
    let u2 = User.findOrCreate({facebookId: '2', name: 'George Clooney'});
    Promise.all([u1, u2])
      .spread((user1, user2) => {
        u1 = User.findById(user1._id);
        u2 = User.findById(user2._id);
        all = User.find();
        return Promise.all([u1, u2, all]);
      })
      .spread((user1, user2, all) => {
        expect(all.length).to.equal(2);
        expect(user1).to.be.ok;
        expect(user1.name).to.equal('Neal')
        expect(user2).to.be.ok;
        expect(user2.name).to.equal('George Clooney');
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  })

  it('Will not create duplicate users', function(done) {
    User.findOrCreate({facebookId: '1', name: 'Neal'})
      .then(() => {
        return User.findOrCreate({facebookId: '1'})
      })
      .then((user) => {
        expect(user.name).to.equal('Neal');
        return User.find();
      })
      .then((users) => {
        expect(users.length).to.equal(1);
        done();
      })
      .catch((err) => {
        console.log(err);
      });
  });
});
