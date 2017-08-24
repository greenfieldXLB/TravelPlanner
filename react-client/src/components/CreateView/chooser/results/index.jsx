import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import Subheader from 'material-ui/Subheader';
import TextField from 'material-ui/TextField';
import StarRatingComponent from 'react-star-rating-component';


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
                <span>
                  <b>Price: {tile.price} <br/> 
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
                :
                <span>
                  <b>
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
          >
            <img src={tile.image_url} />
          </GridTile>
        ))}
      </GridList>
    </div>
  </div>

)

export default Results;

        