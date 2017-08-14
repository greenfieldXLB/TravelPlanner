import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Hotel from './components/hotel.jsx'
import Flights from './components/Flights.jsx';
var FlightAPI = require('qpx-express');

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      departureLocation: 'San Francisco', // depart SF
      arrivalLocation: 'London', // arrive London
      departureDate: '2017-12-01', // depart SF on 2017-12-01 YYYY-MM-DD
      arrivalDate: '2017-12-02', // arrive London on 12/2/17
      returnDate: '2017-12-15', // return to SF on 12/15/17
      addresses:[ // array of addresses of ALL QUERIED hotel, attractions, & restaurants
        {category: 'hotel', name: 'London Hilton on Park Lane', address: '22 Park Ln, Mayfair, London W1K 1BE, UK'},
        {category: 'attraction', name: 'London Bridge', address: 'London SE1 9DD, UK'},
        {category: 'attraction', name: 'Buckingham Palace', address: 'Westminster, London SW1A 1AA, UK'},
        {category: 'restaurant', name: 'Dinner by Heston Blumenthal', address: '66 Knightsbridge, London SW1X 7LA, UK'},
        {category: 'restaurant', name: 'Nobu London', address: 'Metropolitan by COMO, 19 Old Park Ln, Mayfair, London W1K 1LB, UK'}
      ],
      flights: ['flight1', 'flight2', 'flight3', 'flight4', 'flight5'],
      savedChoices: [ // array of SAVED flight, hotel, attractions, & restaurants
        {category: 'flight', type: 'departure', airport: 'SFO', airline: 'British Airways', date: '', time: '', price: ''},
        {category: 'flight', type: 'arrival', airport: 'LGW', airline: 'British Airways', date: '', time: '', price: ''},
        {category: 'hotel', name: 'London Hilton on Park Lane', address: '22 Park Ln, Mayfair, London W1K 1BE, UK', checkInDate: '', checkOutDate:'', price: '', imageUrl: ''},
        {category: 'attraction', name: 'Buckingham Palace', address: 'Westminster, London SW1A 1AA, UK', imageUrl: ''},
        {category: 'restaurant', name: 'Dinner by Heston Blumenthal', address: '66 Knightsbridge, London SW1X 7LA, UK', price: '', imageUrl: ''},
        {category: 'restaurant', name: 'Nobu London', address: 'Metropolitan by COMO, 19 Old Park Ln, Mayfair, London W1K 1LB, UK', price: '', imageUrl: ''}
      ],
      hotels: []
    }
  }


  handleClick() {
    // console.log('I got clicked')
    // var logResults = (json) => { console.log(11111,json)
    // }
    // var parameters = {
    //   // method: 'GET',
    //   // url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=-33.8670522,151.1957362&radius=500&type=hotel&key=AIzaSyDM-RnDOk60Kj_ZJ2xUx29RrZKnutnI2UI'
    //   location: '-33.8670522,151.1957362',
    //   radius: '500',
    //   type: 'restaurant',
    //   key:'AIzaSyDM-RnDOk60Kj_ZJ2xUx29RrZKnutnI2UI'
    // }

    // $.ajax({
    //   url: 'https://maps.googleapis.com/maps/api/place/nearbysearch/json' ,
    //   method: 'GET',
    //   data: parameters,
    //   dataType: 'jsonp',
    //   jsonpCallback: 'logResults',
    //   success: (data) => {
    //     console.log('succuess!');
    //   },
    //   error: (error) => {
    //     console.log(111111, error)
    //   }

    // })
     $.ajax({
      url: '/search',
      method: 'GET',
      data: {city: 'San Francisco', price:1 },
      success: (data) => {
         this.setState({
            hotels: this.state.hotels.concat(JSON.parse(data))
          });
          $.ajax({
      url: '/search',
      method: 'GET',
      data: {city: 'San Francisco', price:2 },
      success: (data) => {
         this.setState({
            hotels: this.state.hotels.concat(JSON.parse(data))
          });
          $.ajax({
      url: '/search',
      method: 'GET',
      data: {city: 'San Francisco', price:3 },
      success: (data) => {
         this.setState({
            hotels: this.state.hotels.concat(JSON.parse(data))
          });
      },
      error: (err) => {
        console.log('error !')
      }
     })
      },
      error: (err) => {
        console.log('error !')
      }
     })
      },
      error: (err) => {
        console.log('error !')
      }
     })
  }

  componentDidMount() {
    this.getAirportCodes('San Francisco', 'Hong Kong');
    // this.retrieveFlights('2017-12-04', '2017-12-06', 'SFO', 'HKG');
  }

  retrieveFlights(departureDate, returnDate, depLocation, arrLocation) {
    var apiKey = 'AIzaSyCDCZbj7Ath3p-jwi-ZmpAAEdWBmftH3r8';
    var qpx = new FlightAPI(apiKey);

    var body = {
        "request": {
            "passengers": { "adultCount": 1 },
            "slice": [{
                "origin": depLocation, //airport code need to translate to this
                "destination": arrLocation, //airport code
                "date": departureDate // YYYY-MM-DD
              },
              {
                "origin": arrLocation,
                "destination": depLocation,
                "date": returnDate // YYYY-MM-DD
              }
            ],
            "solutions": 10,
          }
        };
    var context = this;
    qpx.getInfo(body, function(error, data){
      context.setState({
        flights: data.trips.tripOption
      })
    });
  }

  getAirportCodes(departLoc, arrivalLoc) {
    var term = 'San Francisco';
    var codes = {};
    fetch(`https://www.air-port-codes.com/api/v1/multi?term=${departLoc}`, {
      headers: {
        Accept: "application/json",
        "APC-Auth": "ea0eb61a9e",
        "APC-Auth-Secret": "4b35787cfc26306"
      },
      method: "POST"
    })
    .then((resp) => resp.json())
    .then(function(data) {
      codes.departLoc = data.airports[0].iata;
    });
    fetch(`https://www.air-port-codes.com/api/v1/multi?term=${arrivalLoc}`, {
      headers: {
        Accept: "application/json",
        "APC-Auth": "ea0eb61a9e",
        "APC-Auth-Secret": "4b35787cfc26306"
      },
      method: "POST"
    })
    .then((resp) => resp.json())
    .then(function(data) {
      codes.arrivalLoc = data.airports[0].iata;
    });
    return codes;
  }

  handleFlightClick(flight) {
    var flight1 = flight.slice[0];
    var flight2 = flight.slice[1];
    var saved = {
      saletotal: flight.saleTotal,
      goingDuration: flight1.duration,
      goingOrigin: flight1.segment[0].leg[0].origin,
      goingDestination: flight1.segment[0].leg[0].destination,
      goingArrivalTime: flight1.segment[0].leg[0].arrivalTime,
      goingCarrier: flight1.segment[0].flight.carrier,
      returnDuration: flight2.duration,
      returnOrigin: flight2.segment[0].leg[0].origin,
      returnDestination: flight2.segment[0].leg[0].destination,
      returnArrivalTime: flight2.segment[0].leg[0].arrivalTime,
      returnCarrier: flight2.segment[0].flight.carrier
    };
    this.state.savedChoices.push(saved);
  }

  render () {
    return (
      <div>
        <h1>Trip Planner</h1>
        <Hotel  handleClick={this.handleClick.bind(this)} hotels = {this.state.hotels} />
        <div>
          <h2>Flights</h2>
          <Flights handleFlightClick={this.handleFlightClick.bind(this)} flights={this.state.flights}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
