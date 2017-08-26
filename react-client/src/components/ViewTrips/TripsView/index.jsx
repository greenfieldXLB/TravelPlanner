import React from 'react';

import TripsList from './tripslist/TripsList.jsx';

class TripsView extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    console.log('User on TripsView: ', this.props.user);

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
        <TripsList trips={this.props.trips}/>
      </div>
    )
  }
}

export default TripsView;