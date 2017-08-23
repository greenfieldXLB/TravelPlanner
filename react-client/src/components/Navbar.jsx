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
          paddingBottom: '35px'
        }}
      >
        <ToolbarGroup firstChild={true}>
          <div 
            style={{paddingRight: '25px'}}
          >
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
            style={{paddingRight: '15px'}}
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
          </div>
          <div>
            <Avatar 
              size={50} 
              src="http://i.imgur.com/YxcBaYL.png"
              style={{
                boxShadow: '2px 2px 2px grey'
              }} 
            />
          </div>
        </ToolbarGroup> 
      </Toolbar>

    );
    
  }
}

export default Navbar;
