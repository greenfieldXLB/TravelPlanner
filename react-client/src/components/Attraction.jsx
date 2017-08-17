import React from 'react';
import AttractionItem from './AttractionItem.jsx';

function Attraction ({attrItems, handleAttrItemState, searchClicked}) {

 return(
      <div>
        { attrItems.map((item,index) => <AttractionItem attrItemEntry = {item} key = {index} handleAttrItemState={handleAttrItemState} searchClicked={searchClicked}/>)}
      </div>
    )
}

export default Attraction;
