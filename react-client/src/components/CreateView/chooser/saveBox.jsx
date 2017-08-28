import React from 'react';
import $ from 'jquery';

import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider';

class SaveBox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.trip.name || '',
      description: props.trip.description || ''
    };
    this.updateTripName = this.updateTripName.bind(this);
    this.updateTripDesc = this.updateTripDesc.bind(this);
    this.saveTriptoDB = this.saveTriptoDB.bind(this);
  }

  randomId() {
    var a = Math.random(0, 1) * 1000000000
    var b = a.toString();
    var c = parseInt(b);
    return c;
  }

  saveTriptoDB() {
    let postData = {
      id: this.props.trip.id || this.randomId(),
      food: this.props.trip.restaurants,
      attractions: this.props.trip.attractions,
      lodging: this.props.trip.hotels,
      destination: this.props.destination,
      facebookId: this.props.user.id,
      name: this.state.name,
      description: this.state.description,
      hidden: false
    };

    $.ajax({
      url: '/save',
      method: 'POST',
      data: JSON.stringify(postData),
      contentType: 'application/json',
      success: (data) => {
        this.props.changePage('LIST', {trips: data.trips});
      },
      error: (err) => {
        console.log('err', err);
      }
    });
  }

  updateTripName(event) {
    this.setState({
      name: event.target.value
    });
  }

  updateTripDesc(event) {
    this.setState({
      description: event.target.value
    });
  }

  render() {

    const actions = [
      <FlatButton
        label="Cancel"
        secondary={true}
        onClick={this.props.toggle}
      />,
      <RaisedButton
        label="Save"
        primary={true}
        onClick={this.saveTriptoDB}
      />
    ];

    return (

      <Dialog
        actions={actions}
        modal={false}
        open={this.props.open}
        onRequestClose={this.props.toggle}
        title='Save this trip:'
        actionsContainerStyle={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center'
        }}
        bodyStyle={{
          height: '400px',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-start',
          alignItems: 'center'
        }}
      >

        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
        }}>
          <TextField
            hintText="Trip title..."
            fullWidth={true}
            underlineShow={false}
            value={this.state.name}
            onChange={this.updateTripName}
          />
          <Divider />
          <TextField
            hintText="Trip Description"
            multiLine={true}
            fullWidth={true}
            underlineShow={false}
            value={this.state.description}
            onChange={this.updateTripDesc}
          />
        </div>

      </Dialog>

    )

  }

}

export default SaveBox;
