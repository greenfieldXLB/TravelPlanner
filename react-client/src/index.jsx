import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider.js';

import CreateView from './components/CreateView/index.jsx';
import Navbar from './components/Navbar.jsx';

import LogIn from './components/LogIn.jsx'

import * as pages from './pages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      page: pages.LANDING,
    };
    this.onSearch = this.onSearch.bind(this);
  }

  componentDidMount() {
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

  removeClass(classname) {
    var elems = document.querySelectorAll(`.${classname}`);
    elems.forEach(ele => {
      ele.classList.remove(classname);
    });
  }

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
        <div style={{
          height: '100%'
        }}>
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
