import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';

import exampleData from './exampleData.js';

class Images extends React.Component {
  constructor(props) {
    super(props);
  }

  buildGrid(object) {
    var array = [];
    for (let category in object) {
      for (var i = 0; i < object[category].length - 1; i++) {
        array.push(object[category][i]);
      }
    }
    return array;
  }

  render() {

    return (

      <div style={{
        width: '100%',
        height: '100%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center'
      }}>
        <GridList
          style={{
            width: '100%',
            height: '100%',
            display: 'flex',
            flexWrap: 'nowrap',
            justifyContent: 'flex-start',
            alignItems: 'center',
            overflowX: 'auto',
            overflowY: 'hidden',
          }}
        >
          {
            // mock data
            this.buildGrid(exampleData).map( (tile, i) => (
              <GridTile
                key={i}
                style={{
                  height: '95%'
                }}
                title={tile.title}
                subtitle={tile.author}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={tile.img} />
              </GridTile>
            ))
          }
        </GridList>
      </div>

    )

  }

}

export default Images;