import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import * as pages from '../pages';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return ( 

      <Toolbar
        style={{
          backgroundColor: 'white',
          width: '100%',
          paddingTop: '30px'
        }}
      >
        <ToolbarGroup firstChild={true}>
          <div style={{
            padding: '0 25px 0 30px'
          }}>
            <img src="http://i.imgur.com/m2cZCRZ.png" 
              style={{
                height: '50px',
                boxShadow: '0px 0px 0px'
              }}
            />
          </div> 
        </ToolbarGroup>
        <ToolbarGroup lastChild={true}>
          <div 
            style={{
              display: 'flex',
              flexDirection: 'row',
              paddingRight: '15px',
              alignItems: 'center'
            }}
          >
            <RaisedButton 
              label="View Trips"
              onClick={()=>{
                this.props.changePage(pages.LIST);
              }}
              style={{marginRight: '3px'}}
            />
            <RaisedButton
              label="Create Trip"
              onClick={()=>{
                this.props.changePage(pages.CREATE);
              }}
            />
             <img
                src="http://i.imgur.com/wGQWZN2.png"
                style={{
                  height: '35px',
                  boxShadow: '0px 0px 0px',
                  paddingLeft: '15px'
                }}
                onClick={this.props.handleDrawerToggle}
              />
          </div>
          <div style={{paddingRight: '30px'}}>
            <Avatar 
              size={44} 
              src={this.props.user.picture.data.url}
              style={{
                boxShadow: '2px 2px 2px grey',
              }} 
            />
          </div>
        </ToolbarGroup> 
      </Toolbar>

    );
  }
}

export default Navbar;
