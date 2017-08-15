import React from 'react';

function AttractionItem ({attrItemEntry, handleAttrClick}) {
  
 return(
      <div onClick = {()=>handleAttrClick(attrItemEntry)}>
        <div>{attrItemEntry.name}</div>
        <div>{attrItemEntry.location.display_address.join(', ')}</div>
        <img src={attrItemEntry.image_url}  width="150"></img>
        <br></br>
      </div> 
    )  
}

export default AttractionItem;