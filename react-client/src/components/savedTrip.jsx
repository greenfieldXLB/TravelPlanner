import React from 'react';
import SavedRecordPanel from './SavedRecordPanel.jsx'

class SavedTrip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clicked: false
    }
    this.handlePanelToggle = this.handlePanelToggle.bind(this);
  }

  handlePanelToggle () {
    this.setState({
      clicked: !this.state.clicked
    })
  }

  render() {
    if(!this.state.clicked) {
      return (
        <div onClick = {this.handlePanelToggle}>
          <div>
            <h4><a href = "#">My Saved Trip #{this.props.index + 1} <div className = "glyphicon glyphicon-triangle-bottom"></div></a></h4>
            <span><div className = "glyphicon glyphicon-trash"></div></span>
          </div>
        </div>
      )
    } else {
      return (
        <div onClick = {this.handlePanelToggle}>
          <div>
            <h4><a href = "#">My Saved Trip #{this.props.index + 1}<div className = "glyphicon glyphicon-triangle-top"></div></a></h4>
            <span>X</span>
          </div>
          <SavedRecordPanel trip = {this.props.trip}/>
        </div>
      )
    }
  }
}

export default SavedTrip;
