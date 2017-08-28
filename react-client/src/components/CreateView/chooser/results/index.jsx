import React from 'react';
import _ from 'lodash';
import $ from 'jquery';

import TextField from 'material-ui/TextField';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import Dollar from 'material-ui/svg-icons/editor/attach-money';
import MapIcon from 'material-ui/svg-icons/maps/map';
import GridIcon from 'material-ui/svg-icons/navigation/apps';
import MenuIcon from 'material-ui/svg-icons/navigation/menu';
import Popover, {PopoverAnimationVertical} from 'material-ui/Popover';
import Menu from 'material-ui/Menu';
import MenuItem from 'material-ui/MenuItem';
import SideDrawer from '../../../SideDrawer.jsx';
import StarRatingComponent from 'react-star-rating-component';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

import Map from './map.jsx';
import Grid from './grid.jsx';


class Results extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
      anchorEl: {},
      priceSymbol: '$',
      price: 1,
      search: ''
    };
    this.handlePriceOpen = this.handlePriceOpen.bind(this);
    this.handlePriceClose = this.handlePriceClose.bind(this);
    this.handleMenuItemClick = this.handleMenuItemClick.bind(this);
    this.updateSearch = _.debounce(
      this.updateSearch.bind(this),
      300
    );
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

  changeResults({price, search}) {
    price = price !== undefined ? price : this.state.price;
    search = search !== undefined ? search : this.state.search;

    $.ajax({
      url: this.chooseEndpoint(this.props.index),
      type: 'GET',
      data: {
        location: this.props.destination,
        price,
        search
      },
      success: (data) => {
        this.props.leverageData(data);
      },
      error: (err) => {
        console.log('error: ', err);
      }
    })
  }

  handleMenuItemClick(e, value) {
    this.changeResults({price: value});
    this.setState({
      price: value,
      priceSymbol: this.buildSymbol(value)
    });
    this.handlePriceClose();
  }

  updateSearch(e, search){
    this.changeResults({search});
    this.setState({search});
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
        backgroundColor: 'white'
      }}>

        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'space-around',
          height: '100%',
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
              onChange={this.updateSearch}
            />

            <div>
              <FloatingActionButton
                mini={true}
                onClick={this.handlePriceOpen}
                style={{marginRight: '10px'}}
                disabled={this.props.index === 2}
                disabledColor='white'
              >
                <span style={{fontSize: '13px', color: 'white'}}>
                  {this.state.priceSymbol}
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
                style={{marginRight: '10px'}}
              >
                <GridIcon />
              </FloatingActionButton>
              <FloatingActionButton
                mini={true}
                onClick={this.props.handleDrawerToggle}
              >
                <MenuIcon />
              </FloatingActionButton>
              <Popover
                open={this.state.open}
                anchorEl={this.state.anchorEl}
                anchorOrigin={{horizontal: 'left', vertical: 'bottom'}}
                onRequestClose={this.handlePriceClose}
                animation={PopoverAnimationVertical}
              >
                <Menu value={this.state.priceSymbol} onChange={this.handleMenuItemClick}>
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
              trip={this.props.trip}
              index={this.props.index}
              handleTileClick={this.props.handleTileClick}
              addToTrip={this.props.addToTrip}
              removeFromTrip={this.props.removeFromTrip}
            /> :
            <Map
              data={this.props.data}
              handleMarkerClick={this.props.handleTileClick}
            />
          }
        </div>
        <SideDrawer
          drawerIsOpen={this.props.drawerIsOpen}
          handleDrawerClose={this.props.handleDrawerClose}
          trip={this.props.trip}
        />
      </div>
    )
  }
}

export default Results;
