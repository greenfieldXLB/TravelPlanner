import React from 'react';
import FoodItem from './FoodItem.jsx';

const FoodList = ({foodlist}) => (
  <div>
    <h4> Food List </h4> 
    { foodlist.map(item => <FoodItem fooditem={item}/>)}
  </div>
)

export default FoodList;