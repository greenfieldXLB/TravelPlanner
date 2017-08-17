import React from 'react';
import SavedTrip from './savedTrip.jsx';

const SavedTrips = (props) => {
  if (props.trips.length > 0) {
    console.log(props);
    return (
      <div>
        {props.trips.map(trip => (
          <SavedTrip trip={trip}/>
        ))}
      </div>
    )
  } else {
    return(
        <div className = "glyphicon glyphicon-heart"></div>
    )

  }

}

export default SavedTrips;
