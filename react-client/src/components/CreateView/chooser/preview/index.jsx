import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';

const Preview = (props) => (

  <div id="preview-component" style={{
    width:'48%',
    height: '95%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: 'white'
  }}>
      <div style={{
        width: '95%',
        height: '60%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#a6a6a6'
      }}>
        <GridList
          cellHeight={'auto'}
          cols={1}
          style={{
            width: '100%',
            height: '100%'
          }}
        >
          <GridTile>
            <img 
              src={props.data.image_url}
              style={{
                'maxWidth': '100%',
                'height': '100%',
                align: 'center'
              }}
            />
          </GridTile>
        </GridList>
      </div>
      <div style={{
        width: '95%',
        height: '30%',
        backgroundColor: '#cccccc'
      }}>
        <div>
          info
        </div>
      </div>
  </div>

)

export default Preview;

// {props.data[0].name}

// {props.data[0].price}
// Yelp Star Rating: {props.data[0].rating}
// {props.data[0].location.displayAddress[0]}
// {props.data[0].location.displayAddress[1]}

