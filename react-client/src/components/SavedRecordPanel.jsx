import React from 'react';

class SavedRecordPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('the props for this trip are ', this.props.trip)
    return(
      <div>
        <div className = "flights">
          <h4> <div className = "glyphicon glyphicon-plane"></div> Round-Trip Flight</h4>
          <div><h5><span className = "glyphicon glyphicon-heart"></span> <b>Outbound: </b>{this.props.trip.flights.goingOrigin} -> {this.props.trip.flights.goingDestination} ({this.props.trip.flights.goingCarrier})</h5></div>
          <div><h6><b>Arrival: </b>{this.props.trip.flights.goingArrivalTime}</h6></div>
          <div><h5><span className = "glyphicon glyphicon-heart"></span> <b>Inbound: </b>{this.props.trip.flights.returnOrigin} -> {this.props.trip.flights.returnDestination} ({this.props.trip.flights.returnCarrier})</h5></div>
          <div><h6><b>Arrival: </b>{this.props.trip.flights.returnArrivalTime}</h6></div>
          <div><h6><b>Round Trip: {this.props.trip.flights.saletotal} per person</b></h6></div>
          <br></br>
        </div>

        <div className = "hotel">
          <h4><div className = "glyphicon glyphicon-home"></div> Hotel</h4>
          <div><h5><span className = "glyphicon glyphicon-heart"></span> {this.props.trip.hotel.name}</h5></div>
          <div><h6>{this.props.trip.hotel.address}</h6></div>
          <br></br>
        </div>

        <div>
          <h4><div className = "glyphicon glyphicon-camera"></div> Attractions</h4>
            {this.props.trip.attractions.map((attraction, index) =>
              <div>
                <div><h5><span className = "glyphicon glyphicon-heart"></span> {attraction.name}</h5></div>
                <div><h6>{attraction.location.display_address[0]}</h6></div>
                <div><h6>{attraction.location.display_address[1]}</h6></div>
              </div>
            )}
            <br></br>
        </div>

        <div>
          <h4><div className = "glyphicon glyphicon-cutlery"></div> Restaurants</h4>
            {this.props.trip.food.map((restaurant, index) =>
              <div>
                <div><h5><span className = "glyphicon glyphicon-heart"></span> {restaurant.name} ({restaurant.categories[0]['title']})</h5></div>
                <div><h6>{restaurant.location.display_address[0]}</h6></div>
                <div><h6>{restaurant.location.display_address[1]}</h6></div>
              </div>
            )}
            <br></br>
        </div>
      </div>
    )
  }
}

export default SavedRecordPanel;
