import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Attraction from './components/Attraction.jsx';

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
      savedChoices: [ // array of SAVED flight, hotel, attractions, & restaurants
        {category: 'flight', type: 'departure', airport: 'SFO', airline: 'British Airways', date: '', time: '', price: ''},
        {category: 'flight', type: 'arrival', airport: 'LGW', airline: 'British Airways', date: '', time: '', price: ''},
        {category: 'hotel', name: 'London Hilton on Park Lane', address: '22 Park Ln, Mayfair, London W1K 1BE, UK', checkInDate: '', checkOutDate:'', price: '', imageUrl: ''},
        {category: 'attraction', name: 'Buckingham Palace', address: 'Westminster, London SW1A 1AA, UK', imageUrl: ''},
        {category: 'restaurant', name: 'Dinner by Heston Blumenthal', address: '66 Knightsbridge, London SW1X 7LA, UK', price: '', imageUrl: ''},
        {category: 'restaurant', name: 'Nobu London', address: 'Metropolitan by COMO, 19 Old Park Ln, Mayfair, London W1K 1LB, UK', price: '', imageUrl: ''}
      ],
      attrItems: []
    }
  }

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
          //console.log('RESPONSE: ', res); --Y
          //console.log(typeof JSON.parse(res));--Y
          //console.log(Array.isArray(JSON.parse(res))); --Y
          this.setState({
            attrItems: JSON.parse(res)
          });
        
        console.log('city being searched!');
        //console.log(this.state.attrItems);
      
      },
      error: function(data) {    
      }

    })
  }


  render () {
    return (
      <div>
        <h1>Trip Planner</h1>
        <Attraction attrItems = {this.state.attrItems}/>
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
