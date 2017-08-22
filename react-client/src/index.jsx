import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';

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

  render () {
    return (
      <div>
        <h1 id='title'>Wanderly</h1>
          <span><SearchBar onSearch = {this.onSearch}/></span>
          <Weather information = {this.state.weather} icon = {this.state.weatherIcon}/>

        <table className='table'>
          <thead>
            <tr>
              <th>Lodging</th>
              <th>Attractions</th>
              <th>Restaurants</th>
              <th>Saved</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <Hotels handleHotelClick={this.handleHotelClick.bind(this)} hotels = {this.state.hotels} />
              </td>
              <td>
                <Attraction attrItems = {this.state.attrItems} handleAttrItemState = {this.handleAttrItemState.bind(this)} />
              </td>
              <td>
                <FoodList foodlist = {this.state.foodList} handleFoodItemState = {this.handleFoodItemState.bind(this)} />
              </td>
              <td id = "savedTrips">
                <SavedTrips trips={this.state.savedTrips} remove = {this.removeSingleDatabaseRecord} save = {this.saveToDatabase}/>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
