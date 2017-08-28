import React from 'react';
import FlatButton from 'material-ui/FlatButton';
import * as pages from '../pages';

const Landing = (props) => {
  return (
    <div style={{height: '100px'}}>
      <FlatButton
        label="Create Trip"
        onClick={() => props.changePage(pages.CREATE, {editing: 'NEW'})}
      />

      <FlatButton
        label="View Trips"
        onClick={() => props.changePage(pages.LIST)}
      />
    </div>
  )
};

export default Landing;
