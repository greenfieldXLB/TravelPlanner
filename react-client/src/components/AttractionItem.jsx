import React from 'react';
import classnames from 'classnames';

class AttractionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false,
    }
  }

  handleAttrClick(){
    console.log('CLICKED');

    this.setState({
      selected: !this.state.selected,
      //selectedArry: currentArr
    }, ()=>{
      this.props.handleAttrItemState( this );
    });
  }

  render(){
    let classes = classnames('attrBackground', {activeAttr: this.state.selected} );
    return(
      <div className = {classes} onClick = {this.handleAttrClick.bind(this)}>
        <div>{this.props.attrItemEntry.name}</div>
        <div>{this.props.attrItemEntry.location.display_address.join(', ')}</div>
        <img src={this.props.attrItemEntry.image_url}  width="150"></img>
        <br></br>
      </div>
    )
  }
}

export default AttractionItem;