import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import Avatar from 'material-ui/Avatar';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import * as pages from '../pages';

class Navbar extends React.Component {
  constructor(props) {
    super(props);
  }

  getNavButtons() {
    let toggled = this.props.page === 'LIST';
    return (
      <div style={{paddingRight: '8px'}}>
      {
        toggled ?
          <div>
            <RaisedButton
            label="View Trips" onClick={()=>{
              this.props.changePage(pages.LIST);
            }}
            style={{marginRight: '3px'}}
            primary={true}
          />
          <RaisedButton
            label="Create Trip"
            onClick={()=>{
              this.props.changePage(pages.CREATE, {editing: 'NEW'});
            }}
          />
        </div> :
        <div>
          <RaisedButton
            label="View Trips"
            onClick={()=>{
              this.props.changePage(pages.LIST);
            }}
            style={{marginRight: '3px'}}
          />
          <RaisedButton
            label="Create Trip"
            primary={true}
            onClick={()=>{ this.props.changePage(pages.CREATE, {editing: 'NEW'});
            }}
          />
        </div> }
      </div>
    )
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
          {this.getNavButtons()}
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
