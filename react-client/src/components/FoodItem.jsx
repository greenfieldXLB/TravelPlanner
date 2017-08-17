import React from 'react';
import classnames from 'classnames';


class FoodItem extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  handleFoodClick(){
    console.log('FOOD CLICKED')
    this.setState({
      selected: !this.state.selected
    }, ()=>{
      this.props.handleFoodItemState( this );
    })
  }

  render(){
    let foodclasses = classnames('attrBackground', {activeAttr: this.state.selected} );
    return(
      <div className = {foodclasses} onClick = {this.handleFoodClick.bind(this)}>
        <div>
          <div>{ this.props.fooditem.price }</div>
          { this.props.fooditem.name }
        </div>
        <div>{ this.props.fooditem.location.display_address}</div>
        <img src={ this.props.fooditem.image_url } width='150'></img>
      </div>
    )
  }

}

export default FoodItem;
