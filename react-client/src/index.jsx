import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar.jsx';

/*
import Hotels from './components/hotels.jsx'
import Flights from './components/Flights.jsx';
import config from '../../config.js';
import SearchBar from './components/SearchBar.jsx';
import Attraction from './components/Attraction.jsx';
import FoodList from './components/FoodList.jsx';
import Weather from './components/Weather.jsx';
import SavedTrips from './components/savedTrips.jsx';
*/
const pages = {
  LANDING: 'LANDING',
  CREATE: 'CREATE',
  LIST: 'LIST'
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      page: pages.LANDING
    }
    this.logIn = this.logIn.bind(this);
    this.changePage = this.logIn.bind(this);
  }

  logIn(user) {
    this.setState({
      user
    });
  }

  changePage(page) {
    this.setState({
      page
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <Navbar />
      </MuiThemeProvider>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
