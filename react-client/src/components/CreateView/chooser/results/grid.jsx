import React from 'react';
import StarRatingComponent from 'react-star-rating-component';
import {GridList, GridTile} from 'material-ui/GridList';

import IconButton from 'material-ui/IconButton';
import AddFullCircle from 'material-ui/svg-icons/content/add-circle';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

class Grid extends React.Component {
  constructor(props){
    super(props);
  }

  findAdded(tile) {
    let tripData = {
      1: 'hotels',
      2: 'attractions',
      3: 'restaurants'
    };
    var inTrip = false;
    var currentData = this.props.trip[tripData[this.props.index]];
    for (var i = 0; i < currentData.length; i++) {
      if (currentData[i].id === tile.id) {
        inTrip = true;
        break;
      }
    }
    return inTrip;
  }

  iconButtonHandler(tile) {
    this.findAdded(tile);
    return (
      <IconButton>
        {
          this.findAdded(tile) ? 
          <DeleteIcon color='#b3b3b3' hoverColor='white' onClick={ () => this.props.removeFromTrip(tile) }/> :
          <AddFullCircle color='#b3b3b3' hoverColor='white' onClick={ () => this.props.addToTrip(tile) }/>
        }
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
            actionIcon={this.iconButtonHandler(tile)}
          >
            <img src={tile.image_url} />
          </GridTile>
        ))}
      </GridList>
    )
  }
}

export default Grid;