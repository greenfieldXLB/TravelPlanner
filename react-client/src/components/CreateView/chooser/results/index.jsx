import React from 'react';

import Dollar from 'material-ui-community-icons/icons/currency-usd';
import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';


const Results = (props) => (

  <div id="results-component" style={{
    width:'48%',
    height: '95%',
    display: 'flex',
    flexWrap: 'wrap',
    backgroundColor: 'white'
  }}>

    <div style={{
      display: 'flex',
      flexWrap: 'wrap',
      justifyContent: 'space-around'
    }}>

      <div style={{
        width: '100%',
        height: '12%',
        display: 'flex',
        justifyContent: 'space-around',
        alignItems: 'center',

      }}>
        <TextField 
          hintText="Search..."
        />
        <Dollar />
      </div>

      <GridList
        cellHeight={180}
        cols={3}
        style={{
          width: '100%',
          height: '88%',
          overflowY: 'scroll'
        }}
      >
        {props.data.map((tile, i) => (
          <GridTile
            key={i}
            title={tile.name}
            subtitle={
              tile.price ?
                <span><b>Price: {tile.price} <br/> Star Rating: {tile.rating} </b></span>
                :
                <span><b>Star Rating: {tile.rating} </b></span>
            }
          >
            <img src={tile.image_url} />
          </GridTile>
        ))}
      </GridList>
    </div>
  </div>

)

export default Results;