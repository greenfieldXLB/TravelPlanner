import React from 'react';
import FoodItem from './FoodItem.jsx';

const FoodList = ({foodlist}) => (
  <div>
    <h4> Food List </h4>
    { foodlist.map((item,index) => <FoodItem fooditem={item} key={index}/>)}
  </div>
)

export default FoodList;