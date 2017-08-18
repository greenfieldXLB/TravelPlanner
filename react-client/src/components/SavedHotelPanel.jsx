import React from 'react';


class SavedHotelPanel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {date: new Date()};
  }
  render() {
    if(this.props.trip.hasOwnProperty('hotel') === false) {
      return (
        <div></div>
      )
    } else {
      return (
        <div className = "hotel">
          <h4><div className = "glyphicon glyphicon-home"></div> Hotel</h4>
          <div><h5><span className = "glyphicon glyphicon-heart"></span> {this.props.trip.hotel.name}</h5></div>
          <div><h6>{this.props.trip.hotel.address}</h6></div>
          <br></br>
        </div>
      )
    }
  }
}

export default SavedHotelPanel;
