import React from 'react';
import RaisedButton from 'material-ui/RaisedButton';
import {Toolbar, ToolbarGroup, ToolbarSeparator, ToolbarTitle} from 'material-ui/Toolbar';

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
          <RaisedButton label="View Trips" />
          <ToolbarSeparator />
          <RaisedButton label="Sign out" 
            />
        </ToolbarGroup>
      </Toolbar>
    );
  }
}

export default Navbar;


