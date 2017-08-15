import React from 'react';
import AttractionItem from './AttractionItem.jsx';

function Attraction ({attrItems}) {

 return(
      <div>
        <h4> Attraction List </h4>
        { attrItems.map((item,index) => <AttractionItem attrItemEntry = {item} key = {index}/>)}
      </div>
    )
}

export default Attraction;
