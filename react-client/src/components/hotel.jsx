import React from 'react';

class Hotel extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  

  render () {

    return (
      <div>
        <button onClick = {this.props.handleClick}>click me</button>
        <ul>

        {this.props.hotels.map(hotel => {
           return (<ul>

                    <li>{hotel.location.address1 + "       " + hotel.price}</li>
              


                  </ul>)
        })}
        </ul>
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