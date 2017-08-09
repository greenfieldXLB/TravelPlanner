import React from 'react';

class Lodging extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
  }


  

  render () {
    return (
      <div>
        <button onClick = {this.props.handleClick}>click me</button>
      </div>
    )
  }
}

          

export default Lodging;






// const Lodging = (props) => (
//   <div>
//     <button onClick = {props.handleClick}>click me</button>
//   </div>
// )