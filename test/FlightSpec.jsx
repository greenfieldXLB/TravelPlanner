var React = require('react');
var assert = require('assert');
var chai = require('chai');
var expect = chai.expect;
var ReactTestUtils = require('react-dom/test-utils');
import TestUtils from "react-addons-test-utils";
var ShallowRenderer = require('react-test-renderer/shallow');
var Flights = require('../react-client/src/components/Flights.jsx');
var Flight = require('../react-client/src/components/Flight.jsx');
var fakeFlights = require('./fakeData.js');


describe('Flight', function() {
  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(Flight)).to.be.false;
  });
});
