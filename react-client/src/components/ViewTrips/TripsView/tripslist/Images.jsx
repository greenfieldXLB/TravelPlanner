import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';

import exampleData from './exampleData.js';

class Images extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {

    const subtitles = {
      lodging: 'Hotel',
      attractions: 'Attraction',
      food: 'Restaurant'
    }

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
            this.props.caroselData.map( (tile, i) => (
              <GridTile
                key={i}
                style={{
                  height: '95%'
                }}
                title={tile.name}
                titleStyle={{fontSize: '14px'}}
                subtitle={subtitles[tile.subtitle]}
                titleBackground="linear-gradient(to top, rgba(0,0,0,0.7) 0%,rgba(0,0,0,0.3) 70%,rgba(0,0,0,0) 100%)"
              >
                <img src={tile.image_url} />
              </GridTile>
            ))
          }
        </GridList>
      </div>

    )

  }

}

export default Images;