import React from 'react';
import $ from 'jquery';

import TextField from 'material-ui/TextField'
import AutoComplete from 'material-ui/AutoComplete';

import cities from './cities.js';


class Destination extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
    };
    this.handleRequest = this.handleRequest.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
  }

  handleRequest() {
    console.log('submitted: ', this.state.searchText);
    const endpoints = ['/hotels', '/attractions', '/food'];
    for (var i = 0; i < endpoints.length; i++) {
      $.ajax({
        url: endpoints[i],
        type: 'GET',
        data: {location: this.state.searchText},
        success: (data) => {
          this.props.leverageData(data);
        },
        error: (err) => {
          console.log('error: ', err);
        }
      });
    }
  }

  handleUpdateInput(searchText) {
    this.setState({
      searchText: searchText,
    });
  };

  render() {

    return (

      <div id="selection-component" style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
          
        <h1>Where would you like to go?</h1>
        <span style={{height: '50px'}}></span>
        
        <AutoComplete
          hintText="e.g. New York"
          searchText={this.state.searchText}
          onUpdateInput={this.handleUpdateInput}
          onNewRequest={this.handleRequest}
          dataSource={cities}
          filter={AutoComplete.fuzzyFilter}
        />
          
      </div>

    )

  }

}

export default Destination;