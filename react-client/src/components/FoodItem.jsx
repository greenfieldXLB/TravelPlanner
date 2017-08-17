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
          <div> <br></br></div>
          <div>{ this.props.fooditem.price }</div>
          <b>{ this.props.fooditem.name }</b>
        </div>
        <div>{ this.props.fooditem.location.display_address}</div>
        <img src={ this.props.fooditem.image_url } width='150' height = '150'></img>
      </div>
    )
  }

}

export default FoodItem;
