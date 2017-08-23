import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

import * as pages from '../pages';

class Navbar extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      value: 3,
    };
  }

  handleChange (event, index, value) {
    this.setState({value});
  }

  render() {
    return (
      <Toolbar>
        <ToolbarGroup>
          <RaisedButton
            label="View Trips"
            onClick={()=>{
              this.props.changePage(pages.LIST);
            }}
          />
          <ToolbarSeparator />
          <RaisedButton
            label="Create Trip"
            onClick={()=>{
              this.props.changePage(pages.CREATE);
            }}
          />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Navbar;
