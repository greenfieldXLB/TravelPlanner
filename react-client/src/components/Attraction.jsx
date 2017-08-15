import React from 'react';
import AttractionItem from './AttractionItem.jsx';

function Attraction ({attrItems, handleAttrClick}) {

 return(
      <div>
        <h4> Attraction List </h4>
        { attrItems.map(item => <AttractionItem attrItemEntry = {item} handleAttrClick={handleAttrClick}/>)}
      </div>  
    ) 
  
}

export default Attraction;
