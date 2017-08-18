import React from 'react';

class SavedRecordPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    var tempAttractions =[
      {
        name: 'Bay Bridge',
        address: ['1234 Bay Bridge Way', 'SF, California'],
        image_url: 'IMAGE URL HERE'
      },
      {
        name: 'Alcatraz',
        address: ['1234 Alcatraz Way', 'SF, California'],
        image_url: 'IMAGE URL HERE'
      }
    ]

    var tempRestaurants =[
      {
        name: 'Sushi',
        address: ['1234 Sushi', 'SF, California'],
        image_url: 'IMAGE URL HERE'
      },
      {
        name: 'Soup',
        address: ['1234 Soup Way', 'SF, California'],
        image_url: 'IMAGE URL HERE'
      }
    ]

    return(
      <div>
        <div className = "flights">
          <h4> <div className = "glyphicon glyphicon-plane"></div> Round-Trip Flight</h4>
          <div><h5>LAX -> SFO</h5></div>
          <div><h6><b>Carrier: </b>Southwest Airlines</h6></div>
          <div><h6><b>Arrival Time: </b>3:30 PM</h6></div>
          <div><h5>SFO -> LAX</h5></div>
          <div><h6><b>Carrier: </b>Alaskan Airlines</h6></div>
          <div><h6><b>Arrival Time: </b>9:00 AM</h6></div>
          <br></br>
        </div>

        <div className = "hotel">
          <h4><div className = "glyphicon glyphicon-home"></div> Hotel</h4>
          <div><h5>Hilton SF</h5></div>
          <div><h6>12345 Hilton Way, San Francisco, CA</h6></div>
          <br></br>
        </div>

        <div>
          <h4><div className = "glyphicon glyphicon-camera"></div> Attractions</h4>
            {tempAttractions.map((attraction, index) =>
              <div>
                <div><h5>{attraction.name}</h5></div>
                <div><h6>{attraction.address.join (" ")}</h6></div>
                <div><h6>{attraction.image_url}</h6></div>
              </div>
            )}
            <br></br>
        </div>

        <div>
          <h4><div className = "glyphicon glyphicon-cutlery"></div> Restaurants</h4>
            {tempRestaurants.map((restaurant, index) =>
              <div>
                <div><h5>{restaurant.name}</h5></div>
                <div><h6>{restaurant.address.join (" ")}</h6></div>
                <div><h6>{restaurant.image_url}</h6></div>
              </div>
            )}
        </div>
      </div>
    )
  }
}

export default SavedRecordPanel;

/*

return(
  <div>
    <div className = "flights">
      <h3>Flights</h3>
      <div><h4>{this.props.trip.flights.goingOrigin + ' -> ' + this.props.trip.flights.goingDestination}</h4></div>
      <div><h5><b>Carrier: </b>{this.props.trip.flights.goingCarrier}</h5></div>
      <div><h5><b>Arrival Time: </b>{this.props.trip.flights.goingArrivalTime}</h5></div>
      <br></br>
      <div><h3>{this.props.trip.flights.returnOrigin + ' -> ' + this.props.trip.flights.returnDestination}</h3></div>
      <div><h5><b>Carrier: </b>{this.props.trip.flights.returnCarrier}</h5></div>
      <div><h5><b>Arrival Time: </b>{this.props.trip.flights.returnArrivalTime}</h5></div>
      <br></br>
      <div><h5><b>Round Trip Total: </b>{this.props.trip.flights.saleTotal}</h5></div>
    </div>

    <div className = "hotel">
      <h3>Hotel</h3>
        <div><h4>{this.props.trip.hotel.name}</h4></div>
        <div><h5>{this.props.trip.hotel.address}</h5></div>
    </div>

    <div>
      <h3>Attractions</h3>
        {this.props.trip.attractions.map(attraction, index) {
          <div><h4>{attraction.name}</h4></div>
          <div><h5>{attraction.address.join (" ")}</h5></div>
          <div><h5>{attraction.image_url}</h5></div>
        }}
    </div>

    <div>RESTAURANTS</div>
  </div>
)

*/









/*

savedChoices: [{
  flights: {},
  hotel: {},
  attractions: [],
  food: [],
  weather: {}
}],


*/

// flights {
//   saletotal: flight.saleTotal,
//   goingDuration: flight1.duration,
//   goingOrigin: flight1.segment[0].leg[0].origin,
//   goingDestination: flight1.segment[0].leg[0].destination,
//   goingArrivalTime: flight1.segment[0].leg[0].arrivalTime,
//   goingCarrier: flight1.segment[0].flight.carrier,
//   returnDuration: flight2.duration,
//   returnOrigin: flight2.segment[0].leg[0].origin,
//   returnDestination: flight2.segment[0].leg[0].destination,
//   returnArrivalTime: flight2.segment[0].leg[0].arrivalTime,
//   returnCarrier: flight2.segment[0].flight.carrier
// }
//
// hotel: {
//   address: array
//   name: string
//   price: string
// },
// attractions: [
//   {
//     name: string
//     rating: number
//     location {address1: string, city: string, country: string},
//     image_url: string
//     url: string
//
//   }
// ],
// food: [
//   {
//     name: string
//     rating: number
//     location {address1: string, city: string, country: string},
//     image_url: string
//     url: string
//   }
// ],
//
// weather: {
//
// }
