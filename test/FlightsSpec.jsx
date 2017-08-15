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


describe('Flights', function() {
  it('should be a stateless functional component', function() {
    expect(React.Component.isPrototypeOf(Flights)).to.be.false;
  });
  // it('should render one `Flight` when given one flight', function() {
  //   var renderer = TestUtils.createRenderer();
  //
  //   var oneFakeFlight = fakeFlights.fakeFlight;
  //   var shallow = new ShallowRenderer();
  //   shallow.render(
  //     <Flight flight={oneFakeFlight} />
  //   );
  //
  //   var flights = shallow.getRenderOutput();
  //   expect(flights.props.children).to.have.length(1);
  //   flights.props.children.forEach(child => expect(child.type).to.equal(flight));
  // });
});
