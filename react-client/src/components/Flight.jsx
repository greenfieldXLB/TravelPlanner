import React from 'react';

const Flight = (props) => {
  var arrivalDate = props.flight.slice[0].segment[0].leg[0].arrivalTime;
  arrivalDate = arrivalDate.replace(/T|\:\d\dZ/g,' ');
  arrivalDate = arrivalDate.slice(0, arrivalDate.length - 6);
  var departureDate = props.flight.slice[0].segment[0].leg[0].departureTime;
  departureDate = departureDate.replace(/T|\:\d\dZ/g,' ');
  departureDate = departureDate.slice(0, departureDate.length - 6);
  return (
    <div onClick={() => (props.handleFlightClick(props.flight))}>
      <div>
        <span>{props.flight.slice[0].segment[0].flight.carrier}</span>
        <span> {props.flight.slice[0].segment[0].leg[0].origin} - {props.flight.slice[0].segment[0].leg[0].destination}</span>
        <span> duration: {props.flight.slice[0].duration}</span>
        <div> Departure Time: {departureDate}</div>
        <div> Arrival Time: {arrivalDate}</div>

      </div>
      <div>
        <span>{props.flight.slice[1].segment[0].flight.carrier}</span>
        <span> {props.flight.slice[1].segment[0].leg[0].origin} - {props.flight.slice[1].segment[0].leg[0].destination}</span>
        <span> duration: {props.flight.slice[1].duration}</span>
      </div>
      <div>{props.flight.saleTotal} per person</div>
    </div>
  )
}

export default Flight;
