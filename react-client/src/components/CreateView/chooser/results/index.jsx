import React from 'react';
import $ from 'jquery';

import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dollar from 'material-ui/svg-icons/editor/attach-money';
import MapIcon from 'material-ui/svg-icons/maps/map';
import GridIcon from 'material-ui/svg-icons/navigation/apps';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import StarRatingComponent from 'react-star-rating-component';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import Map from './map.jsx';
import Grid from './grid.jsx';


class Results extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: {},
      selectedItem: '$',
      price: 0
    };
    this.handlePriceOpen = this.handlePriceOpen.bind(this);
    this.handlePriceClose = this.handlePriceClose.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.changeResults = this.changeResults.bind(this);
  }

  buildSymbol(value) {
    if (value === 1) {
      return '$';
    }
    if (value === 2) {
      return '$$';
    }
    if (value === 3) {
      return '$$$';
    }
  }

  chooseEndpoint(index) {
    if (index === 1) {
      return '/hotels';
    }
    if (index === 2) {
      return '/attractions';
    }
    if (index === 3) {
      return '/food';
    }
  }

  changeResults(price) {
    console.log('value on change results: ', price);
    console.log('the destination: ', this.props.destination);
    console.log('current endpoint: ', this.chooseEndpoint(this.props.index));
    $.ajax({
      url: this.chooseEndpoint(this.props.index),
      type: 'GET',
      data: {location: this.props.destination, price: price},
      success: (data) => {
        this.props.leverageData(data);
      },
      error: (err) => {
        console.log('error: ', err);
      }
    })
  }

  handleMenuItemClick(e, value) {
    this.changeResults(value);
    this.setState({
      selectedItem: this.buildSymbol(value)
    });
    this.handlePriceClose();
  }

  handlePriceOpen(event) {
    event.preventDefault();
    this.setState({
      open: true,
      anchorEl: event.currentTarget
    });
  }

  handlePriceClose() {
    this.setState({
      open: false
    });
  }

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
          justifyContent: 'space-around',
          flexBasis: '100%',
          flexDirection: 'column'
        }}>
        
          <div style={{
            width: '100%',
            height: '12%',
            display: 'flex',
            justifyContent: 'space-around',
            alignItems: 'center',
          }}>
          
            <TextField 
              hintText="Search..."
            />

            <div>
              <FloatingActionButton 
                mini={true} 
                onClick={this.handlePriceOpen}
                style={{marginRight: '10px'}}
              >
                <span style={{fontSize: '13px', color: 'white'}}>
                  {this.state.selectedItem}
                </span>
              </FloatingActionButton>
              
              <FloatingActionButton 
                mini={true}
                style={{marginRight: '10px'}}
                onClick={() => this.props.changeMode('MAP')}
              >
                <MapIcon />  
              </FloatingActionButton>
              
              <FloatingActionButton 
                mini={true}
                onClick={() => this.props.changeMode('GRID')}
              >
                <GridIcon />  
              </FloatingActionButton>
              
              <Popover 
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                onRequestClose={this.handlePriceClose}
                animation={PopoverAnimationVertical}
              >
                <Menu value={this.state.selectedItem} onChange={this.handleMenuItemClick}>
                  <MenuItem primaryText="$" value={1} />
                  <MenuItem primaryText="$$" value={2} />
                  <MenuItem primaryText="$$$" value={3} />
                </Menu>
              </Popover>
              
            </div>
          </div>
          { 
            this.props.mode === 'GRID' ?
            <Grid 
              data={this.props.data} 
              handleTileClick={this.props.handleTileClick} 
            /> : 
            <Map />
          }
        </div>
      </div>
    )

  }

}

export default Results;
