import React from 'react';

import TextField from 'material-ui/TextField'
import AutoComplete from 'material-ui/AutoComplete';

import cities from './cities.js';


class Destination extends React.Component { 
  constructor(props) {
    super(props);
    this.state = {
      searchText: ''
    };
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
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
          dataSource={cities}
          filter={AutoComplete.fuzzyFilter}
        />
          
      </div>

    )

  }

}

export default Destination;