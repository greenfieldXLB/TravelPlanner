import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

import Hotel from './components/hotel.jsx'
import Flights from './components/Flights.jsx';
import config from '../../config.js';
const FlightAPI = require('qpx-express');
import SearchBar from './components/SearchBar.jsx';


//import Attraction from './components/Attraction';


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
      flights: [],
      savedChoices: [{
          flights: {},
          hotel: {},
          attractions: [],
          food: [],
          weather: {}
      }],
      hotels: [],
      airportCodes: {}
    }
    this.onSearch = this.onSearch.bind(this);
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
    // this.getAirportCodes('San Francisco', 'Hong Kong'); //once search is complete, get info from there
  }

  retrieveFlights(departureDate, returnDate, depLocation, arrLocation) {
    var apiKey = config.flights;
    var qpx = new FlightAPI(apiKey);

    var body = {
        "request": {
            "passengers": { "adultCount": 1 },
            "slice": [{
                "origin": depLocation,
                "destination": arrLocation,
                "date": departureDate,
                "maxStops": 0
              },
              {
                "origin": arrLocation,
                "destination": depLocation,
                "date": returnDate, // YYYY-MM-DD
                "maxStops": 0
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
    var context = this;
    var codes = {};
    fetch(`https://www.air-port-codes.com/api/v1/multi?term=${departLoc}`, {
      headers: {
        Accept: "application/json",
        "APC-Auth": config.APCAuth,
        "APC-Auth-Secret": config.APCSecret
      },
      method: "POST"
    })
    .then((resp) => resp.json())
    .then(function(data) {
      if (data.airports[0].name.includes('All Airports')) {
        codes.departLoc = data.airports[1].iata;
      } else {
        codes.departLoc = data.airports[0].iata;
      }
    })
    .then(() => {
      fetch(`https://www.air-port-codes.com/api/v1/multi?term=${arrivalLoc}`, {
        headers: {
          Accept: "application/json",
          "APC-Auth": config.APCAuth,
          "APC-Auth-Secret": config.APCSecret
        },
        method: "POST"
      })
      .then((resp) => resp.json())
      .then(function(data) {
        if (data.airports[0].name.includes('All Airports')) {
          codes.arrivalLoc = data.airports[1].iata;
        } else {
          codes.arrivalLoc = data.airports[0].iata;
        }
      })
      .then((codes) => {
        context.setState({
          airportCodes: codes
        });
      })
      .then(() => {
        context.retrieveFlights(context.state.departureDate, context.state.returnDate, codes.departLoc, codes.arrivalLoc);
      });
    });
  }

  handleFlightClick(flight, event) {
    $(event.target).toggleClass('highlight');
    console.log(event.target);
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
    this.state.savedChoices[0].flights = saved;
  }


  onSearch (departureLocation, arrivalLocation, departureDate, returnDate) {
    console.log('the departure location is: ', departureLocation);
    console.log('the arrival location is: ', arrivalLocation);
    console.log('the departure date is: ', departureDate);
    console.log('the return date is: ', returnDate);
    this.setState({
      departureLocation: departureLocation,
      arrivalLocation: arrivalLocation,
      departureDate: departureDate,
      returnDate: returnDate
    })
  }


  // http://127.0.0.1:3000/search?method=GET&url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fnearbysearch%2Fjson%3Flocation%3D-33.8670522%2C151.1957362%26radius%3D500%26type%3Drestaurant%26key%3DAIzaSyDM-RnDOk60Kj_ZJ2xUx29RrZKnutnI2UI
  // http://127.0.0.1:3000/search?method=GET&url=https%3A%2F%2Fmaps.googleapis.com%2Fmaps%2Fapi%2Fplace%2Fnearbysearch%2Fjson&location=-33.8670522%2C151.1957362&radius=500&type=restaurant&key=AIzaSyDM-RnDOk60Kj_ZJ2xUx29RrZKnutnI2UI

  componentDidMount(){
    this.yelpAttrSearch();
  }

  // componentDidMount() {
  //   $.ajax({
  //     url: '/items',
  //     success: (data) => {
  //       this.setState({
  //         items: data
  //       })
  //     },
  //     error: (err) => {
  //       console.log('err', err);
  //     }
  //   });
  // }


  yelpAttrSearch(){

    $.ajax({

      url: '/attraction',
      type: 'POST',
      data: 'san francisco, ca',
      success: (res) => {
        console.log(res);
        //write an ajax get request

        console.log('city being searched!');
        //this.setState{
        //  items: res;
        //}
      },
      error: function(data) {    
      }

    })
  }


  render () {
    return (
      <div>
        <h1>Trip Planner</h1>
        <SearchBar onSearch = {this.onSearch}/>
        <Hotel handleClick={this.handleClick.bind(this)} hotels = {this.state.hotels} />
        <div>
          <h2>Flights</h2>
          <Flights handleFlightClick={this.handleFlightClick.bind(this)} flights={this.state.flights}/>
        </div>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
