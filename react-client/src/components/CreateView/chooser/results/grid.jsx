import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {GridList, GridTile} from 'material-ui/GridList';

import IconButton from 'material-ui/IconButton';
import AddCircleOutline from 'material-ui/svg-icons/content/add-circle-outline';
import AddCircleFull from 'material-ui/svg-icons/content/add-circle';

class Grid extends React.Component {

  addToTrip() {

    return (
      <IconButton>
        <AddCircleOutline color='white' />
      </IconButton>
    )

  }

  render() {
    return (
      <GridList
        cellHeight={180}
        cols={3}
        style={{
          width: '100%',
          height: '88%',
          overflowY: 'scroll'
        }}
      >
        {this.props.data.map((tile, i) => (
          <GridTile
            onClick={() => this.props.handleTileClick(tile)}
            key={i}
            title={tile.name}
            subtitle={
              <span>
                <b>
                  { 
                    tile.price ? 
                    <span> Price: {tile.price} <br/> </span> :
                    null
                  }
                  <div style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'left'
                  }}>
                  Yelp Rating:  
                    <div style={{
                      fontSize: 14,
                      paddingLeft: '3px'
                    }}>
                      <StarRatingComponent
                        name="Rating"
                        editing={false}
                        starCount={5}
                        value={tile.rating}
                        renderStarIcon={(index, value) => {
                          return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
                        }}
                        renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
                        starColor={'#ffb400'}
                        emptyStarColor={'#ffb400'}
                      />
                    </div>
                  </div>
                </b>
              </span>
            }
            actionIcon={this.addToTrip()}
          >
            <img src={tile.image_url} />
          </GridTile>
        ))}
      </GridList>
    )
  }
}

export default Grid;