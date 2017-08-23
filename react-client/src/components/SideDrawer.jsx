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
          width={200}
          openSecondary={true}
          open={this.props.drawerIsOpen}
          onRequestChange={(open) => this.props.handleDrawerClose()}
        >
          <MenuItem onClick={this.props.handleDrawerClose}>Trip 1</MenuItem>
          <MenuItem onClick={this.props.handleDrawerClose}>Trip 2</MenuItem>
          <MenuItem onClick={this.props.handleDrawerClose}>Trip 3</MenuItem>
        </Drawer>
      </div>
    );
  }
}

export default SideDrawer;
