import React from 'react';


class SavedFlightPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }

  render() {

    if(this.props.trip.hasOwnProperty('flights') === false) {
      return (
        <div></div>
      )
    } else {
      return (
        <div className = "flights">
          <h4> <div className = "glyphicon glyphicon-plane"></div> Round-Trip Flight</h4>
          <div><h5><span className = "glyphicon glyphicon-heart"></span> <b>Outbound: </b>{this.props.trip.flights.goingOrigin} -> {this.props.trip.flights.goingDestination} ({this.props.trip.flights.goingCarrier})</h5></div>
          <div><b>Arrival: </b>{this.props.trip.flights.goingArrivalTime}</div>
          <div><h5><span className = "glyphicon glyphicon-heart"></span> <b>Inbound: </b>{this.props.trip.flights.returnOrigin} -> {this.props.trip.flights.returnDestination} ({this.props.trip.flights.returnCarrier})</h5></div>
          <div><b>Arrival: </b>{this.props.trip.flights.returnArrivalTime}</div>
          <div><b>Round Trip: {this.props.trip.flights.saletotal} per person</b></div>
          <br></br>
        </div>
      )
    }

  }
}

export default SavedFlightPanel;
