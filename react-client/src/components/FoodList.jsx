import React from 'react';
import FoodItem from './FoodItem.jsx';

const FoodList = ({foodlist,handleFoodItemState}) => {

  if (foodlist.length > 0) {
    return (
      <div>
        { foodlist.map((item,index) => <FoodItem fooditem={item} key={index} handleFoodItemState={handleFoodItemState}/>)}
      </div>
    )
  } else {
    return (
      <div className = "glyphicon glyphicon-cutlery"></div>
    )
  }

}

export default FoodList;
