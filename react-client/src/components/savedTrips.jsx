import React from 'react';
import SavedTrip from './savedTrip.jsx';

class SavedTrips extends React.Component {
  render() {
    if (this.props.trips.length > 0) {
      return (
        <div>
          <a href ="#" onClick = {this.props.save}><h3 className = "glyphicon glyphicon-heart save"></h3></a>
          {this.props.trips.map((trip,index) => (
            <SavedTrip trip={trip} key = {index} index = {index} remove = {this.props.remove}/>
          ))}
        </div>
      )
    } else {
      return(
        <div>
          <a href ="#"><h3 className = "glyphicon glyphicon-heart save"></h3></a>
        </div>
      )
    }
  }
}



export default SavedTrips;
