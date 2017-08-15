import React from 'react';
import AttractionItem from './AttractionItem.jsx';

class Attraction extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }


  render(){

    return (
      <div>
        <h4> Attraction List </h4>
        There are { props.items.length } items.
        {props.items.map(item => <AttractionItem item = {item}/>)}
      </div>
    )
  }
  
}

export default Attraction;
