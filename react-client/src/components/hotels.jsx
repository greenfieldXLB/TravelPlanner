import React from 'react';
import HotelEntry from './HotelEntry.jsx';

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hotelClicked: ''
    }
  }
  render () {

    return (
       <div>
        { this.props.hotels.map((hotel,index) => <HotelEntry hotel={hotel} index={index} key={index} handleHotelClick={this.props.handleHotelClick.bind(this)}/>)}
      </div>

    )
  }
}

export default Hotel;
