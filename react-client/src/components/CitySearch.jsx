import React from 'react';

class CitySearch extends React.Component {
  render() {
    return(
      <div className="field clearfix date-wrapper">
        <div className="label">
          <label >{this.props.description}:</label>
        </div>
        <div className="input" onChange = {this.props.handleChange} >
          <input type="text" className="input-text" placeholder={this.props.description}></input>
        </div>
      </div>
    )
  }
}

export default CitySearch;
