import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class SideDrawer extends React.Component {
  constructor(props) {
    console.log(props);
    super(props);
  }

  render() {
    return (
      <div>
        <Drawer
          docked={false}
          width={250}
          openSecondary={true}
          open={this.props.drawerIsOpen}
          onRequestChange={(open) => this.props.handleDrawerClose()}
        >
          <div 
            onClick={this.props.handleDrawerClose}>
            <div style={{
              fontWeight: 'bold',
              fontSize: '150%',
              textAlign: 'center',
              paddingTop: '5px',
              paddingBottom: '10px'
            }}>
              Current Trip <br/>
            </div>
            <div style={{
              paddingLeft: '5px'
            }}>
              <i 
                className='fa fa-hotel'
                style={{
                  paddingRight: '3px'
                }}
              />
              Lodging:<br/>
              {
                this.props.trip.hotels.map(hotel => 
                  <small style={{
                    paddingLeft: '15px'
                  }}>
                  {hotel.name} <br/>
                  </small>
                )
              }
              <i 
                className='fa fa-gamepad'
                style={{
                  paddingRight: '3px'
                }}
              />
              Attractions: <br/>
              {
                this.props.trip.attractions.map(attraction => 
                  <small style={{
                    paddingLeft: '15px'
                  }}>
                  {attraction.name} <br/>
                  </small>
                )
              }
              <i 
                className='fa fa-cutlery'
                style={{
                  paddingRight: '3px'
                }}
              />
              Food: <br/>
              {
                this.props.trip.restaurants.map(restaurant => 
                  <small style={{
                    paddingLeft: '15px'
                  }}>
                  {restaurant.name} <br/>
                  </small>
                )
              } 
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default SideDrawer;
