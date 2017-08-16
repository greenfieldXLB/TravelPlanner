import React from 'react';
import AttractionItem from './AttractionItem.jsx';

function Attraction ({attrItems, handleAttrItemState}) {

 return(
      <div>
        <h4> Attraction List </h4>
        { attrItems.map((item,index) => <AttractionItem attrItemEntry = {item} key = {index} handleAttrItemState={handleAttrItemState}/>)}
      </div>
    )
}

export default Attraction;
