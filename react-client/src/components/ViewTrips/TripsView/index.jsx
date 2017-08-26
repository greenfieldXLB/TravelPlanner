import React from 'react';

import TripsList from './tripslist/TripsList.jsx';

class TripsView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 'hello'
    };
  }

  render() {
    return (
      <div 
        id="selection-component" 
        style={{
          width: '100%',
          height: '95%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>
        <TripsList />
      </div>
    )
  }
}

export default TripsView;