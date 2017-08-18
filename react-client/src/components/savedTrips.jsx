import React from 'react';
import SavedTrip from './savedTrip.jsx';

class SavedTrips extends React.Component {
  render() {
    if (this.props.trips.length > 0) {
      return (
        <div>
          <a href ="#" ><h3 className = "glyphicon glyphicon-heart save"></h3></a>
          <div><button onClick ={this.props.save}>Save Trip</button></div>
          {this.props.trips.map((trip,index) => (
            <SavedTrip trip={trip} key = {index} index = {index} remove = {this.props.remove}/>
          ))}
        </div>
      )
    } else {
      return(
        <div>
          <a href ="#"><h3 className = "glyphicon glyphicon-heart save"></h3></a>
          <div><button onClick ={this.props.save}>Save Trip</button></div>
        </div>
      )
    }
  }
}



export default SavedTrips;
