import React from 'react';

class HotelEntry extends React.Component {
  constructor(props) {
    super(props);
    console.log(props);
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
          <div> <br></br></div>
          <div> {this.props.hotel.price}</div>
          <div className='avoid-clicks'><b>{this.props.hotel.name}</b></div>
          <div className='avoid-clicks'>{this.props.hotel.location.display_address.join(', ')}</div>
          <img className='avoid-clicks' src={this.props.hotel.image_url}  width="150" height = "150"></img>
          </div>
      </div>
    )
  }
}
export default HotelEntry;
