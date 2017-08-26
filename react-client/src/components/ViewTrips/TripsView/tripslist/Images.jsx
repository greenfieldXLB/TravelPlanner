import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';

class Images extends React.Component {

  render() {

    const tilesData = [
      {
        img: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/161201115958-68-year-in-pictures-2016-restricted-super-169.jpg',
        title: 'Breakfast',
        author: 'jill111',
      },
      {
        img: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/161201161116-83-year-in-pictures-2016-restricted-super-169.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
      },
      {
        img: 'https://i.ytimg.com/vi/qh7LLydY8eo/maxresdefault.jpg',
        title: 'Camera',
        author: 'Danson67',
      },
      {
        img: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/161201115958-68-year-in-pictures-2016-restricted-super-169.jpg',
        title: 'Breakfast',
        author: 'jill111',
      },
      {
        img: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/161201161116-83-year-in-pictures-2016-restricted-super-169.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
      },
      {
        img: 'https://i.ytimg.com/vi/qh7LLydY8eo/maxresdefault.jpg',
        title: 'Camera',
        author: 'Danson67',
      },
      {
        img: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/161201115958-68-year-in-pictures-2016-restricted-super-169.jpg',
        title: 'Breakfast',
        author: 'jill111',
      },
      {
        img: 'http://i2.cdn.cnn.com/cnnnext/dam/assets/161201161116-83-year-in-pictures-2016-restricted-super-169.jpg',
        title: 'Tasty burger',
        author: 'pashminu',
      },
      {
        img: 'https://i.ytimg.com/vi/qh7LLydY8eo/maxresdefault.jpg',
        title: 'Camera',
        author: 'Danson67',
      },
    ];


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
            tilesData.map( (tile, i) => (
              <GridTile
                key={i}
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