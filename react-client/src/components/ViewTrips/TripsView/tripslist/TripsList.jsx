import React from 'react';

import Trip from './Trip.jsx';

class TripsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    console.log('trips on TripsList: ', this.props.trips);

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
            return <Trip key={i} trip={trip}/>
          }) 
        }
      </div>

    )

  }

}

export default TripsList;