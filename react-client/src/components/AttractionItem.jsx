import React from 'react';
import classnames from 'classnames';

class AttractionItem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    }
  }

  handleAttrClick(){

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
      <div className = {classes} id="itemBorder" onClick = {this.handleAttrClick.bind(this)} >
        <div><b>{this.props.attrItemEntry.name}</b></div>
        <div>{this.props.attrItemEntry.location.display_address.join(', ')}</div>
        <div>{this.props.attrItemEntry.categories[0].title}</div>
        <img src={this.props.attrItemEntry.image_url}  width="150" height="150"></img>
      </div>
    )
  }
}

export default AttractionItem;
