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
    this.setState({
      selected: !this.state.selected
    }, ()=>{
      this.props.handleFoodItemState( this );
    })
  }

  render(){
    let foodclasses = classnames('attrBackground', {activeAttr: this.state.selected} );
    return(
      <div className = {foodclasses} id="itemBorder" onClick = {this.handleFoodClick.bind(this)}>
        <div>
          <b>{ this.props.fooditem.name }</b>
        </div>
        <div>{ this.props.fooditem.location.display_address.join(', ') }</div>
        <div>
          { this.props.fooditem.price }
          <span id="foodtype">{this.props.fooditem.categories[0].title}</span>
        </div>
        <img src={ this.props.fooditem.image_url } width='150' height = '150'></img>
      </div>
    )
  }

}

export default FoodItem;
