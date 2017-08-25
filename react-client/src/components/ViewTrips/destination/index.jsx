import React from 'react';
import $ from 'jquery';

import TextField from 'material-ui/TextField'
import AutoComplete from 'material-ui/AutoComplete';
import CircularProgress from 'material-ui/CircularProgress';

import cities from './cities.js';


class Destination extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {};
    this.handleRequest = this.handleRequest.bind(this);
  }

  handleRequest() {
    this.props.triggerLoading();
    const endpoints = ['/hotels', '/attractions', '/food'];
    for (var i = 0; i < endpoints.length; i++) {
      $.ajax({
        url: endpoints[i],
        type: 'GET',
        data: {location: this.props.searchText},
        success: (data) => {
          this.props.leverageData(data);
        },
        error: (err) => {
          console.log('error: ', err);
        }
      });
    }
  }

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

        { this.props.loading ?
          <CircularProgress size={50}/> :
          <span style={{height: '50px'}}></span>
        }
        
        <AutoComplete
          hintText="e.g. New York"
          searchText={this.props.searchText}
          onUpdateInput={this.props.updateSearch}
          onNewRequest={ () => { this.handleRequest(this.props.searchText) } }
          dataSource={cities}
          filter={AutoComplete.fuzzyFilter}
        />

        
          
      </div>

    )

  }

}

export default Destination;