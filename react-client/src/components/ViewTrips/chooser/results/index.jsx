import React from 'react';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dollar from 'material-ui/svg-icons/editor/attach-money';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';

import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';


class Results extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: {},
      price: 0
    };
    // this.handlePriceOpen = this.handlePriceOpen.bind(this);
    // this.handlePriceClose = this.handlePriceClose.bind(this);
    // this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
  }

  // handleMenuItemClick() {
  //   console.log('menu clicked');
  // }

  // handlePriceOpen(event) {
  //   event.preventDefault();
  //   console.log(event.currentTarget);
  //   this.setState({
  //     open: true,
  //     anchorEl: event.currentTarget
  //   });
  // }

  // handlePriceClose() {
  //   this.setState({
  //     open: false
  //   });
  // }

  render() {

    return (

      <div id="results-component" style={{
        width:'48%',
        height: '95%',
        display: 'flex',
        flexWrap: 'wrap',
        backgroundColor: 'white'
      }}>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around'
        }}>

          <div style={{
            width: '100%',
            height: '12%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',

          }}>
          
          <GridList
            cellHeight={180}
            cols={3}
            style={{
              width: '100%',
              height: '88%',
              overflowY: 'scroll'
            }}> 
          </GridList>
        </div>
      </div>
    </div>
    )
  }
}

export default Results;