import React from 'react';

import Images from './Images.jsx';

class Trip extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {

    return (

      <div  style={{
        width: '100%',
        height: '25%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-start',
        alignItems: 'center',
      }}>

        <div id='trip-body' style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
        }}>

          <div id='trip-body-text' style={{
            width: '38%',
            height: '96%',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-evenly',
          }}>

            <div id='trip-body-text-header' style={{
              width: '100%',
              height: '20%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              backgroundColor: '#d9d9d9'
            }}>
              <span style={{paddingLeft: '10px'}}>My Trip</span>
              <span style={{paddingRight: '10px'}}>Destination</span>
            </div>

            <div id='trip-body-text-body' style={{
              width: '100%',
              height: '80%',
              display: 'flex',
              flexDirection: 'row',
              backgroundColor: '#e6e6e6'
            }}>
              <span style={{padding: '10px 0 0 10px'}}>Description</span>
            </div>

          </div>

          <div id='trip-body-images' style={{
            width: '58%',
            height: '96%',
            display: 'flex',
            backgroundColor: '#f2f2f2'
          }}>
            <Images />
          </div>

        </div>

      </div>

    )

  }

}

export default Trip;