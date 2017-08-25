import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import StarRatingComponent from 'react-star-rating-component';
import Paper from 'material-ui/Paper';

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
        width: '98%',
        height: '66%',
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
        width: '98%',
        height: '30%',
        backgroundColor: '#cccccc'
      }}>
        <Paper 
          zDepth={2} 
          style={{
            height: '100%',
            width: '100%',
            display: 'inline-block',
            backgroundColor: '#f2f2f2'
          }}
        >
          {
            props.data ? 
              <div>
                <div style={{
                  fontSize: 24,
                  paddingTop: '7px',
                  paddingLeft: '7px',
                }}>
                  {props.data.name}
                </div>
                <div style={{
                  display: 'flex',
                  flexWrap: 'wrap',
                  justifyContent: 'left',
                  paddingLeft: '7px'
                }}>
                  Yelp Rating:  
                  <div style={{
                    fontSize: 16,
                    paddingLeft: '3px'
                  }}>
                    <StarRatingComponent
                      name="Rating"
                      editing={false}
                      starCount={5}
                      value={props.data.rating}
                      renderStarIcon={(index, value) => {
                        return <span className={index <= value ? 'fa fa-star' : 'fa fa-star-o'} />;
                      }}
                      renderStarIconHalf={() => <span className="fa fa-star-half-full" />}
                      starColor={'#ffb400'}
                      emptyStarColor={'#ffb400'}
                    />
                  </div>
                  <div style={{
                    paddingLeft: '3px'
                  }}>
                  ({props.data.review_count} reviews)
                  </div>
                </div>
                <div style={{
                  paddingLeft: '7px'
                }}>
                  <i className='fa fa-external-link'/>
                  <a 
                    href={props.data.url} 
                    target="_blank"
                    style={{
                      paddingLeft: '3px'
                    }}
                  >
                    View Yelp Page
                  </a>  
                  <br /> {props.data.location.display_address[0]}
                  <br /> {props.data.location.display_address[1]}
                  <br /> {props.data.display_phone}
                </div>
              </div>
            : null
          } 
        </Paper>
      </div>
  </div>
)

export default Preview;