import React from 'react';
import SavedRecordPanel from './SavedRecordPanel.jsx'

class SavedTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handlePanelToggle = this.handlePanelToggle.bind(this);
    this.handleRemove = this.handleRemove.bind(this);
  }

  handlePanelToggle (event) {
    event.preventDefault();
    this.setState({
      clicked: !this.state.clicked
    })
  }

  handleRemove(event) {
    event.preventDefault();
    this.props.remove(this.props.trip._id);
  }

  render() {
    if(!this.state.clicked) {
      return (
        <div >
          <div >
            <h4 className = "panelHeader">My Saved Trip #{this.props.index + 1} <a href = "#"><div className = "glyphicon glyphicon-triangle-bottom toggle" onClick = {this.handlePanelToggle}></div></a></h4>
            <a href = "#"><div><h4 className = "glyphicon glyphicon-trash panelHeader trash" onClick = {this.handleRemove}></h4></div></a>
          </div>
        </div>
      )
    } else {
      return (
        <div >
          <div >
            <h4 className = "panelHeader">My Saved Trip #{this.props.index + 1} <a href = "#"><div className = "glyphicon glyphicon-triangle-top toggle" onClick = {this.handlePanelToggle}></div></a></h4>
            <a href = "#"><div><h4 className = "glyphicon glyphicon-trash panelHeader trash" onClick = {this.handleRemove}></h4></div></a>
          </div>
          <SavedRecordPanel trip = {this.props.trip}/>
        </div>
      )
    }
  }
}

export default SavedTrip;
