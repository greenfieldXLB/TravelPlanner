import React from 'react';

const Flight = (props) => {
  var getTime = function(time) {
    time = time.replace(/T|\:\d\dZ/g,' ');
    time = time.slice(0, time.length - 6);
    return time;
  }

  var getDuration = function(duration) {
    var minutes = duration % 60;
    var hours = (duration - minutes) / 60;
    var time = hours.toString() + " hrs " + (minutes < 10 ? "0" : "") + minutes.toString() + ' minutes';
    return time;
  }

  return (
    <div onClick={() => (props.handleFlightClick(props.flight))}>
      <div>
        <span>{props.flight.slice[0].segment[0].flight.carrier}</span>
        <span> {props.flight.slice[0].segment[0].leg[0].origin} - {props.flight.slice[0].segment[0].leg[0].destination}</span>
        <span> duration: {getDuration(props.flight.slice[0].duration)}</span>
        <div> Departure Time: {getTime(props.flight.slice[0].segment[0].leg[0].departureTime)}</div>
        <div> Arrival Time: {getTime(props.flight.slice[0].segment[0].leg[0].arrivalTime)}</div>
      </div>
      <div>
        <span>{props.flight.slice[1].segment[0].flight.carrier}</span>
        <span> {props.flight.slice[1].segment[0].leg[0].origin} - {props.flight.slice[1].segment[0].leg[0].destination}</span>
        <span> duration: {getDuration(props.flight.slice[1].duration)}</span>
        <div> Departure Time: {getTime(props.flight.slice[1].segment[0].leg[0].departureTime)}</div>
        <div> Arrival Time: {getTime(props.flight.slice[1].segment[0].leg[0].arrivalTime)}</div>
      </div>
      <div>{props.flight.saleTotal} per person</div>
      <br></br>
    </div>
  )
}

export default Flight;
