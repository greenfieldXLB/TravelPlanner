import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar.jsx';

import LogIn from './components/LogIn.jsx'

import * as pages from './pages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      page: pages.LANDING
      departureLocation: '',
      arrivalLocation: '',
      departureDate: '',
      arrivalDate: '',
      returnDate: '',
      addresses:[
        {category: 'hotel', name: 'London Hilton on Park Lane', address: '22 Park Ln, Mayfair, London W1K 1BE, UK'},
        {category: 'restaurant', name: 'Dinner by Heston Blumenthal', address: '66 Knightsbridge, London SW1X 7LA, UK'},
        {category: 'restaurant', name: 'Nobu London', address: 'Metropolitan by COMO, 19 Old Park Ln, Mayfair, London W1K 1LB, UK'}
      ],
      flights: [],
      savedChoices: [{
        // flights: {},
        hotel: {},
        attractions: [],
        food: [],
        // weather: {}
      }],
      // airportCodes: {},
      savedTrips: [],
      attrItems: [],
      hotels: [],
      foodList: [],
      // weather:[],
      // weatherIcon: ''
    };
    this.onSearch = this.onSearch.bind(this);
    this.responseToSaveAddress = this.responseToSaveAddress.bind(this);
    this.requestWeather = this.requestWeather.bind(this);
    this.removeSingleDatabaseRecord = this.removeSingleDatabaseRecord.bind(this);
    this.saveToDatabase = this.saveToDatabase.bind(this);
    this.retrieveFromDatabase = this.retrieveFromDatabase.bind(this);
  }

  componentDidMount() {
    this.retrieveFromDatabase();
  }

  hotelsSearch() {
     $.ajax({
      url: '/hotels',
      method: 'GET',
      data: {city: this.state.arrivalLocation},
      success: (res) => {
        const parsedHotel = JSON.parse( res );
        const addHotelAddress = this.state.addresses
        .concat( parsedHotel.map( this.responseToSaveAddress( 'hotel' ) ) );

        this.setState({
          hotels: parsedHotel,
          addresses: addHotelAddress
        });
      },
      error: (err) => {
        console.log('error !')
      }
    })
  }

  handleHotelClick(hotel, event){
    console.log(hotel.url);

    this.removeClass('hotelHighlight');
    if (this.state.selectedHotelId === hotel.id) {
      this.state.savedChoices[0].hotel = {};
      delete this.state.selectedHotelId;
    } else {
      this.setState({
        selectedHotelId: hotel.id
      });
      $(event.target).toggleClass('hotelHighlight');
      var saved = {
        name: hotel.name,
        address: hotel.location.display_address.join(', '),
        price: hotel.price,
        image_url: hotel.image_url
      };
     this.state.savedChoices[0].hotel = saved;
    }
    this.logIn = this.logIn.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  logIn(user) {
    this.setState({
      user
    });
  }

  // retrieveFlights(departureDate, returnDate, depLocation, arrLocation) {
  //   var apiKey = process.env.QPX_API || config.flights;
  //   var qpx = new FlightAPI(apiKey);

  //   var body = {
  //     "request": {
  //       "passengers": { "adultCount": 1 },
  //       "slice": [{
  //         "origin": depLocation,
  //         "destination": arrLocation,
  //         "date": departureDate,
  //         "maxStops": 0
  //         },
  //         {
  //           "origin": arrLocation,
  //           "destination": depLocation,
  //           "date": returnDate, // YYYY-MM-DD
  //           "maxStops": 0
  //         }
  //       ],
  //       "solutions": 12,
  //     }
  //   };
  //   var context = this;
  //   qpx.getInfo(body, function(error, data){
  //     context.setState({
  //       flights: data.trips.tripOption
  //     })
  //   });
  // }

  // getAirportCodes(departLoc, arrivalLoc) {
  //   var context = this;
  //   var codes = {};
  //   var APCAuth = process.env.APC_AUTH || config.APCAuth;
  //   var APCSecret = process.env.APC_SECRET || config.APCSecret;
  //   fetch(`https://www.air-port-codes.com/api/v1/multi?term=${departLoc}`, {
  //     headers: {
  //       Accept: "application/json",
  //       "APC-Auth": APCAuth,
  //       "APC-Auth-Secret": APCSecret
  //     },
  //     method: "POST"
  //   })
  //   .then((resp) => resp.json())
  //   .then(function(data) {
  //     if (data.airports[0].name.includes('All Airports')) {
  //       codes.departLoc = data.airports[1].iata;
  //     } else {
  //       codes.departLoc = data.airports[0].iata;
  //     }
  //   })
  //   .then(() => {
  //     fetch(`https://www.air-port-codes.com/api/v1/multi?term=${arrivalLoc}`, {
  //       headers: {
  //         Accept: "application/json",
  //         "APC-Auth": APCAuth,
  //         "APC-Auth-Secret": APCSecret
  //       },
  //       method: "POST"
  //     })
  //     .then((resp) => resp.json())
  //     .then(function(data) {
  //       if (data.airports[0].name.includes('All Airports')) {
  //         codes.arrivalLoc = data.airports[1].iata;
  //       } else {
  //         codes.arrivalLoc = data.airports[0].iata;
  //       }
  //     })
  //     .then((codes) => {
  //       context.setState({
  //         airportCodes: codes
  //       })
  //     })
  //     .then(() => {
  //       fetch(`https://www.air-port-codes.com/api/v1/multi?term=${arrivalLoc}`, {
  //         headers: {
  //           Accept: "application/json",
  //           "APC-Auth": APCAuth,
  //           "APC-Auth-Secret": APCSecret
  //         },
  //         method: "POST"
  //       })
  //       .then((resp) => resp.json())
  //       .then(function(data) {
  //         if (data.airports[0].name.includes('All Airports')) {
  //           codes.arrivalLoc = data.airports[1].iata;
  //         } else {
  //           codes.arrivalLoc = data.airports[0].iata;
  //         }
  //       })
  //       .then((codes) => {
  //         context.setState({
  //           airportCodes: codes
  //         });
  //       })
  //       .then(() => {
  //         context.retrieveFlights(context.state.departureDate, context.state.returnDate, codes.departLoc, codes.arrivalLoc);
  //       });
  //     })
  //   });
  // }

  removeClass(classname) {
    var elems = document.querySelectorAll(`.${classname}`);
    elems.forEach(ele => {
      ele.classList.remove(classname);
    });
  }

  // handleFlightClick(flight, event) {
  //   this.removeClass('flightHighlight');
  //   if (this.state.selectedFlightId === flight.id) {
  //     this.state.savedChoices[0].flights = {};
  //     delete this.state.selectedFlightId;
  //   } else {
  //     this.setState({
  //       selectedFlightId: flight.id
  //     });
  //     $(event.target).toggleClass('flightHighlight');
  //     var flight1 = flight.slice[0];
  //     var flight2 = flight.slice[1];
  //     var saved = {
  //       saletotal: '$' + flight.saleTotal.slice(3),
  //       goingDuration: flight1.duration,
  //       goingOrigin: flight1.segment[0].leg[0].origin,
  //       goingDestination: flight1.segment[0].leg[0].destination,
  //       goingArrivalTime: flight1.segment[0].leg[0].arrivalTime,
  //       goingCarrier: flight1.segment[0].flight.carrier,
  //       returnDuration: flight2.duration,
  //       returnOrigin: flight2.segment[0].leg[0].origin,
  //       returnDestination: flight2.segment[0].leg[0].destination,
  //       returnArrivalTime: flight2.segment[0].leg[0].arrivalTime,
  //       returnCarrier: flight2.segment[0].flight.carrier
  //     };
  //     this.state.savedChoices[0].flights = saved;
  //   }
  // }

  onSearch (departureLocation, arrivalLocation, departureDate, returnDate) {
    console.log('the departure location is: ', departureLocation);
    console.log('the arrival location is: ', arrivalLocation);
    console.log('the departure date is: ', departureDate);
    console.log('the return date is: ', returnDate);
    this.removeClass('flightHighlight');
    this.removeClass('hotelHighlight');
    this.setState({
      page
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar
            changePage={this.changePage}
          />
          { this.getMainComponent() }
        </div>
      </MuiThemeProvider>
    )
  }

  getMainComponent() {
    /*if (!this.state.user) {
      return <LogIn login={this.login} />
    }*/
    switch (this.state.page) {
      case pages.LANDING:
        return <div> Landing </div>
      case pages.CREATE:
        return <div> Create </div>
      case pages.LIST:
        return <div> List </div>
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
