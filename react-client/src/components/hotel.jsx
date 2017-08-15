import React from 'react';

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  // handleHotelClick(){
  //   this.props.handleHotelClick()
  // }

  render () {

    return (
      <div>
        <button onClick = {this.props.handleClick}>click me</button>
         {this.props.hotels.map(hotel => {
           return (
            <div onClick={(e) => (this.props.handleHotelClick(hotel, e))}>

            <ul>
                <li>{hotel.location.address1} { hotel.location.city}  {hotel.location.zip_code}    {hotel.price}</li>
                <li><img src={hotel.image_url} width="128" height="128" /></li>
            </ul>
            </div>)
        })}

      </div>
    )
  }
}
              




          

export default Hotel;






// const Lodging = (props) => (
//   <div>
//     <button onClick = {props.handleClick}>click me</button>
//   </div>
// )