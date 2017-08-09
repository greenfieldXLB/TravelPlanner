import React from 'react';

function AttractionItem ({attrItemEntry}) {
  
 return(
      <div>
        <div>{attrItemEntry.name}</div>
        <div>{attrItemEntry.location.display_address}</div>
        <img src={attrItemEntry.image_url}  width="130"></img>
      </div>  
    )  
}

export default AttractionItem;