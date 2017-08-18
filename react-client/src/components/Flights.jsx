import React from 'react';
import Flight from './Flight.jsx';

const Flights = (props) => {
  if (typeof (props.flights[0]) === 'object') {
    return (
      <div>
        {props.flights.map((flight) => (
          <Flight handleFlightClick={props.handleFlightClick} flight={flight} key={flight.id}/>
        ))}
      </div>
    )
  } else {
    return (
      <h3 className = "glyphicon glyphicon-plane" id ="plane"></h3>
    )
  }
}

export default Flights;
