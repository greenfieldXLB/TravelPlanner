import React from 'react';

class HotelEntry extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      select: false
    }
  }
  handleHotelClick(hotel, event){
    this.props.handleHotelClick(hotel, event);
  }
  render () {

    return (
      <div onClick={(e) => (this.handleHotelClick(this.props.hotel, e))}>
          <div className='avoid-clicks'>
          <li className='avoid-clicks'>{this.props.hotel.location.display_address} {this.props.hotel.price}</li>
          <img className='avoid-clicks' src={this.props.hotel.image_url}  width="150"></img>
          </div>
      </div>
    )
  }
}   
export default HotelEntry;