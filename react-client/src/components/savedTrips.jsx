import React from 'react';
import SavedTrip from './savedTrip.jsx';

const SavedTrips = (props) => {
  console.log(props);
  return (
    <div>
      <h3>Saved Trips</h3>
      {props.trips.map(trip => (
        <SavedTrip trip={trip}/>
      ))}
    </div>
  )
}

export default SavedTrips;
