import React from 'react';

import Trip from './Trip.jsx';

class TripsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div style={{
        width: '96%',
        height: '96%',
        overflowY: 'scroll',
        display: 'list',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>
        {
          this.props.trips.map( (trip, i) => {
            if (!trip.hidden) {
              return <Trip
                       key={i}
                       trip={trip}
                       user={this.props.user}
                       changePage={this.props.changePage}
                     />
            }
          })
        }
      </div>

    )

  }

}

export default TripsList;
