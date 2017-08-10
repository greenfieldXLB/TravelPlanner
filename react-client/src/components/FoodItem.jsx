import React from 'react';

const FoodItem = ({fooditem}) => (
  <div>
    <img src={ fooditem.image_url } width='150'></img>
    <div>
      <div>{ fooditem.price }</div>
      { fooditem.name }
    </div>
    <div>{ fooditem.location.display_address}</div>
    <br></br>
  </div>
)

export default FoodItem;