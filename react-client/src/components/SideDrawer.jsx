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
              paddingTop: '8px',
              paddingBottom: '12px',
              paddingRight: '3px'
            }}>
              Current Trip <br/>
            </div>
            <div style={{
              paddingLeft: '7px'
            }}>
              <div style={{paddingBottom: '10px'}}>
                <i 
                  className='fa fa-hotel'
                  style={{
                    paddingRight: '5px'
                  }}
                />
                Lodging:<br/>
                {
                  this.props.trip.hotels.map((hotel, i) => 
                    <small 
                      style={{
                        paddingLeft: '22px'
                      }}
                      key={i}
                    >
                    {hotel.name} <br/>
                    </small>
                  )
                }
              </div>
              <div style={{paddingBottom: '8px'}}>
                <i 
                  className='fa fa-gamepad'
                  style={{
                    paddingRight: '5px'
                  }}
                />
                Attractions: <br/>
                {
                  this.props.trip.attractions.map(attraction => 
                    <small style={{
                      paddingLeft: '22px'
                    }}>
                    {attraction.name} <br/>
                    </small>
                  )
                }
              </div>
              <div style={{paddingBottom: '8px'}}>
                <i 
                  className='fa fa-cutlery'
                  style={{
                    paddingRight: '7px'
                  }}
                />
              
                Food: <br/>
                {
                  this.props.trip.restaurants.map(restaurant => 
                    <small style={{
                      paddingLeft: '22px'
                    }}>
                    {restaurant.name} <br/>
                    </small>
                  )
                } 
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    );
  }
}

export default SideDrawer;
