import React from 'react';
import SavedTrip from './savedTrip.jsx';

<<<<<<< HEAD
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
=======
const SavedTrips = (props) => {
  if (props.trips.length > 0) {
    return (
      <div>
        {props.trips.map(trip => (
          <SavedTrip trip={trip}/>
        ))}
      </div>
    )
  } else {
    return(
        <h3 className = "glyphicon glyphicon-heart" ></h3>
    )

>>>>>>> save column styling
  }
}


export default SavedTrips;
