import React from 'react';
import FoodItem from './FoodItem.jsx';

const FoodList = ({foodlist,handleFoodItemState}) => (
  <div>
    <h4> Food List </h4>
    { foodlist.map((item,index) => <FoodItem fooditem={item} key={index} handleFoodItemState={handleFoodItemState}/>)}
  </div>
)

export default FoodList;