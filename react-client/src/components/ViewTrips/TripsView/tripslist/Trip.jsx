import React from 'react';
import $ from 'jquery';

import FlatButton from 'material-ui/FlatButton';
import IconButton from 'material-ui/IconButton';
import DeleteIcon from 'material-ui/svg-icons/action/delete';


import Images from './Images.jsx';

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.removeTrip = this.removeTrip.bind(this);
  }

  buildGridData(object) {
    var array = [];
    for (let category in object) {
      if (Array.isArray(object[category])) {
        for (var i = 0; i < object[category].length; i++) {
          object[category][i].subtitle = category
          array.push(object[category][i]);
        }
      }
    }
    return array;
  }

  removeTrip() {
    console.log('tripID: ', this.props.trip.id);
    console.log('facebookID: ', this.props.user.id);
    $.ajax({
      url: '/removeTrip',
      method: 'POST',
      data: JSON.stringify({
        tripID: this.props.trip.id,
        facebookID: this.props.user.id
      }),
      contentType: 'application/json',
      success: (data) => {
        this.props.changePage('LIST', {trips: data.trips})
      },
      error: (err) => {
        console.error(err);
      }
    })
  }

  render() {

    return (

      <div style={{
        width: '100%',
        height: '20%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>

        <div id='trip-body' style={{
          width: '100%',
          height: '96%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>

          <div id='trip-body-text' style={{
            width: '38%',
            height: '100%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            backgroundColor: '#d9d9d9'
          }}>

            <div id='trip-body-text-header' style={{
              width: '100%',
              height: '20%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span style={{paddingLeft: '10px'}}>{this.props.trip.name}</span>
              <span style={{paddingRight: '10px'}}>{this.props.trip.destination}</span>
            </div>

            <div id='trip-body-text-body' style={{
              width: '100%',
              height: '55%',
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: '#e6e6e6'
            }}>
              <span style={{
                padding: '10px 0 0 10px',
                fontSize: '12px'
              }}>
                {this.props.trip.description}
              </span>
            </div>

            <div id='button-container' style={{
              width: '100%',
              height: '25%',
              display: 'flex',
              flexDirection: 'row'
            }}>
              <div id='view-edit-button' style={{
                width: '50%',
                height: '100%',
                display: 'flex',
              }}>
                <FlatButton
                  label='View/Edit Trip'
                  fullWidth={true}
                  style={{
                    height: '100%'
                  }}
                  onClick={() => this.props.changePage(
                    'CREATE',
                    {editing: this.props.trip}
                  )}
                />
              </div>

              <div id='view-delete' style={{
                width: '50%',
                height: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <IconButton onClick={this.removeTrip}>
                  <DeleteIcon color='#b3b3b3' hoverColor='#333333'/>
                </IconButton>
              </div>
            </div>

          </div>

          <div id='trip-body-images' style={{
            width: '58%',
            height: '100%',
            display: 'flex',
            backgroundColor: '#f2f2f2'
          }}>
            <Images caroselData={this.buildGridData(this.props.trip)}/>
          </div>

        </div>

      </div>

    )

  }

}

export default Trip;
