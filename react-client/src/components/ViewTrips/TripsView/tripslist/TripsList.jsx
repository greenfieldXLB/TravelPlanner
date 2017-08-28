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
<<<<<<< HEAD
            if (!trip.hidden) {
              return <Trip 
                       key={i} 
                       trip={trip} 
                       user={this.props.user} 
                       changePage={this.props.changePage}
                     />
            }
          }) 
=======
            return <Trip
              key={i}
              trip={trip}
              changePage={this.props.changePage}
            />
          })
>>>>>>> Enable trip editing via CreateView
        }
      </div>

    )

  }

}

export default TripsList;
