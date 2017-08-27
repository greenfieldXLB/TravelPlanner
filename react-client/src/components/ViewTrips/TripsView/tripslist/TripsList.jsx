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
            // if trip.hidden property === true
              // return nothing
            // else return: 
            return <Trip key={i} trip={trip}/>
          }) 
        }
      </div>

    )

  }

}

export default TripsList;