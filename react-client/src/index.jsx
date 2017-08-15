import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Hotels from './components/hotels.jsx'
import Flights from './components/Flights.jsx';
import config from '../../config.js';
import SearchBar from './components/SearchBar.jsx';
import Attraction from './components/Attraction.jsx';
import FoodList from './components/FoodList.jsx';
import Weather from './components/Weather.jsx'
const FlightAPI = require('qpx-express');
const SabreDevStudio = require('sabre-dev-studio');


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

      airportCodes: {},
      savedTrips: ['trip1', 'trip2', 'trip3'],

      hotels: [],

      attrItems: [],

      airportCodes: {},

      savedChoices: [ // array of SAVED flight, hotel, attractions, & restaurants
        {category: 'flight', type: 'departure', airport: 'SFO', airline: 'British Airways', date: '', time: '', price: ''},
        {category: 'flight', type: 'arrival', airport: 'LGW', airline: 'British Airways', date: '', time: '', price: ''},
        {category: 'hotel', name: 'London Hilton on Park Lane', address: '22 Park Ln, Mayfair, London W1K 1BE, UK', checkInDate: '', checkOutDate:'', price: '', imageUrl: ''},
        {category: 'attraction', name: 'Buckingham Palace', address: 'Westminster, London SW1A 1AA, UK', imageUrl: ''},
        {category: 'restaurant', name: 'Dinner by Heston Blumenthal', address: '66 Knightsbridge, London SW1X 7LA, UK', price: '', imageUrl: ''},
        {category: 'restaurant', name: 'Nobu London', address: 'Metropolitan by COMO, 19 Old Park Ln, Mayfair, London W1K 1LB, UK', price: '', imageUrl: ''}
      ],

      hotels: [],
      foodList: [],
      weather:[],
      weatherIcon: ''
    }
    this.onSearch = this.onSearch.bind(this);
    this.responseToSaveAddress = this.responseToSaveAddress.bind(this);
    this.requestWeather = this.requestWeather.bind(this);
  }



  hotelsSearch() {

     $.ajax({
      url: '/hotels',
      method: 'GET',
      data: {city: this.state.arrivalLocation},
      success: (res) => {

        const parsedAttr = JSON.parse( res );

        const addAttrAddress = this.state.addresses
        .concat( parsedAttr.map( this.responseToSaveAddress( 'hotel' ) ) );

        this.setState({
          hotels: parsedAttr,
          addresses: addAttrAddress
        });
        console.log(this.state.addresses)
      },
      error: (err) => {
        console.log('error !')
      }
     })
  }
  handleHotelClick(hotel, event){
   var elems = document.querySelectorAll('.hotelHighlight');
    elems.forEach(ele => {
      ele.classList.remove('hotelHighlight');
    });
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
      address: hotel.location.display_address,
      price: hotel.prices
    }
   console.log(11111, this.state.savedChoices[0].hotel)
   this.state.savedChoices[0].hotel = saved;
    }

  componentDidMount() {
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
          "APC-Auth": "ea0eb61a9e",
          "APC-Auth-Secret": "4b35787cfc26306"
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
    if (this.state.selectedFlightId === flight.id) {
      this.state.savedChoices[0].flights = {};
      delete this.state.selectedFlightId;
      $(event.target).toggleClass('selected');
    } else if (!this.state.selectedFlightId){
      this.setState({
        selectedFlightId: flight.id
      });
      $(event.target).toggleClass('selected');
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
    } else {
      alert("Please uncheck the previous flight before selecting a new one");
    }
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
    },function(){
      this.yelpAttrSearch();
      this.searchFood();
      this.getAirportCodes(departureLocation, arrivalLocation);
      this.hotelsSearch(arrivalLocation);
      this.requestWeather(arrivalLocation, departureDate);
    });
  }

  componentDidMount(){
    //this.yelpAttrSearch();
  }


  yelpAttrSearch(){
    console.log(this.state.arrivalLocation);

    $.ajax({
      url: '/attraction',
      type: 'POST',
      data: { location: this.state.arrivalLocation },
      success: (res) => {

        const parsedAttr = JSON.parse( res );

        const addAttrAddress = this.state.addresses
        .concat( parsedAttr.map( this.responseToSaveAddress( 'attraction' ) ) );

        this.setState({
          attrItems: parsedAttr,
          addresses: addAttrAddress
        });
      },
      error: function(data) {
      }
    })
  }


  searchFood(){
    $.ajax({
      url:'/food',
      data: { location: this.state.arrivalLocation },
      type: 'POST',
      success:(res) => {

          const parsedFood = JSON.parse( res );

          const addFoodAddress = this.state.addresses
          .concat( parsedFood.map( this.responseToSaveAddress( 'food' ) ) );

          this.setState({
            foodList: parsedFood,
            addresses: addFoodAddress
          });
      },

      error: (err) => {
        console.log('err', err);
      }
    })
  }


  responseToSaveAddress( category ){
    return function( {name, location, coordinates} ){
      const display_address = location.display_address;

      return {
        category,
        name,
        address: display_address.join(', '),
        coordinates
      };
    }
  }

  requestWeather(city, date) {
    var context = this;
    $.ajax({
      method: "POST",
      url: "/weather",
      data: {location: city, date: date},
      success: function(data) {
        var parsedData = JSON.parse(data);
        context.setState({
          weather: [parsedData],
          weatherIcon: parsedData.icon
        })
      },
      error: function(err) {
          console.log('error in requesting data.')
      }
    })
  }

  render () {
    return (
      <div>
        <h1>Trip Planner</h1>
        <SearchBar onSearch = {this.onSearch}/>
        <Weather information = {this.state.weather} icon = {this.state.weatherIcon}/>
        <Hotel  handleClick={this.handleClick.bind(this)} hotels = {this.state.hotels} />
        <div>
          <h2>Flights</h2>
          <Flights handleFlightClick={this.handleFlightClick.bind(this)} flights={this.state.flights}/>
        </div>

        <Attraction attrItems = {this.state.attrItems}/>

        <FoodList foodlist = {this.state.foodList}/>

      </div>
    )
  }

}



ReactDOM.render(<App />, document.getElementById('app'));
