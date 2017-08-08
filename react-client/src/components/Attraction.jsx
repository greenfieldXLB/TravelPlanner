import React from 'react';
import AttractionItem from './AttractionItem.jsx';

class Attraction extends React.Component {

  constructor(props){
    super(props);
    this.state = {
      items: []
    }
  }

  search(){

    $.ajax({

      url: '/attraction',
      type: 'POST',
      data: 'San Francisco',
      success: (res) => {
        console.log('city being searched!');
      },
      error: function(data) {    
      }

    })
  }

  render(){

    return (
      <div>
        <h4> Attraction List </h4>
        There are { props.items.length } items.
        {props.items.map(item => <Attraction item = {item}/>)}
      </div>
    )
  }
  
}

export default Attraction;
