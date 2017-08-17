import React from 'react';
import AttractionItem from './AttractionItem.jsx';

function Attraction ({attrItems, handleAttrItemState, searchClicked}) {

if (attrItems.length > 0) {
  return(
       <div>
         { attrItems.map((item,index) => <AttractionItem attrItemEntry = {item} key = {index} handleAttrItemState={handleAttrItemState} searchClicked={searchClicked}/>)}
       </div>
     )
} else {
  return (
    <div className = 'glyphicon glyphicon-camera'></div>
  )
}

}

export default Attraction;
