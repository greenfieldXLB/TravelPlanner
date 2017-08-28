import React from 'react';

import TripsView from './TripsView/index.jsx';


class ViewTrips extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    return (

      <div id="view-body" style={{
        height: '92%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <div id="viewtrips-component" style={{
          width: '100%',
          height: '90%',
          maxWidth: '1000px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-start',
        }}>

          <div id='title' style={{
            width: '100%',
            height: '5%',
            fontSize: '30px'
          }}>
            My Trips
          </div>

          <TripsView
            trips={this.props.trips}
            user={this.props.user}
            changePage={this.props.changePage}
          />

        </div>
      </div>

    )

  }

}

export default ViewTrips;
