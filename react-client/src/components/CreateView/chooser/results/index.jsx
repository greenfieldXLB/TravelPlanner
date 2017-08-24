import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';

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
      <GridList
        cellHeight={180}
        cols={3}
        style={{
          width: '100%',
          height: '100%',
          overflowY: 'scroll'
        }}
      >
        {props.data.map((tile, i) => (
          <GridTile
            key={i}
            title={tile.name}
            subtitle={
              <span><b>Price: {tile.price} <br/> Star Rating: {tile.rating} </b></span>
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