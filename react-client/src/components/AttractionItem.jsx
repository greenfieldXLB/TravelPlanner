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
      <div className = {classes} onClick = {this.handleAttrClick.bind(this)} >
        <div> <br></br></div>
        <div><b>{this.props.attrItemEntry.name}</b></div>
        <div>{this.props.attrItemEntry.location.display_address.join(', ')}</div>
        <div> <br></br></div>
        <img src={this.props.attrItemEntry.image_url}  width="150" height="150"></img>
        <br></br>
      </div>
    )
  }
}

export default AttractionItem;
