import React from 'react';

import {GridList, GridTile} from 'material-ui/GridList';
import StarRatingComponent from 'react-star-rating-component';
import Paper from 'material-ui/Paper';
import IconButton from 'material-ui/IconButton';
import FloatingActionButton from 'material-ui/FloatingActionButton';
import AddFullCircle from 'material-ui/svg-icons/content/add-circle';
import DeleteIcon from 'material-ui/svg-icons/action/delete';

class Preview extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      default: ''
    }
  };

  componentWillMount() {
    this.props.data.forEach(item => {
      if ((item.rating > 4 && item.review_count > 1)) {
        this.setState({
          default: item
        });
      }
    });
  }

  componentWillReceiveProps(nextProps) {
    nextProps.data.forEach(item => {
      if ((item.rating > 4 && item.review_count > 1)) {
        this.setState({
          default: item
        });
      }
    });
  }

  findAdded(selection) {
    let tripData = {
      1: 'hotels',
      2: 'attractions',
      3: 'restaurants'
    };
    var inTrip = false;
    let currentData = this.props.trip[tripData[this.props.index]];
    currentData.forEach(item => {
      if (item.id === selection.id) {
        inTrip = true;
      }
    });
    return inTrip;
  }

  iconButtonHandler(selection) {
    this.findAdded(selection);    
    return (
      <FloatingActionButton mini={true} >
        {
          this.findAdded(selection) ? 
          <DeleteIcon style={{width: '100%', height: '100%', backgroundColor: 'red'}} onClick={() => this.props.removeFromTrip(selection)} /> :
          <AddFullCircle style={{width: '100%', height: '100%'}} hoverColor='#00bcd4' onClick={() => this.props.addToTrip(selection)} />
        }
      </FloatingActionButton>
    )
  }

  render() {
    return (
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
              {
                this.props.selectedItem ?
                <img 
                  src={this.props.selectedItem.image_url}
                  style={{
                    'maxWidth': '100%',
                    'height': '100%',
                    align: 'center'
                  }}
                />
                :
                <img 
                  src={this.state.default.image_url}
                  style={{
                    'maxWidth': '100%',
                    'height': '100%',
                    align: 'center'
                  }}
                />
              }
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
              <div style={{
                display: 'flex',
                width: '100%',
                height: '100%'
              }}>
                <div style={{
                  width: '80%',
                  height: '100%',
                  overflowY: 'auto',
                  display: 'flex'
                }}>
                {
                  this.props.selectedItem ? 
                    <div>
                      <div style={{
                        fontSize: 24,
                        paddingTop: '7px',
                        paddingLeft: '7px',
                      }}>
                        {this.props.selectedItem.name}
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
                            value={this.props.selectedItem.rating}
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
                        ({this.props.selectedItem.review_count} reviews)
                        </div>
                      </div>
                      <div style={{
                        paddingLeft: '7px'
                      }}>
                        <i className='fa fa-external-link'/>
                        <a 
                          href={this.props.selectedItem.url} 
                          target="_blank"
                          style={{
                            paddingLeft: '3px'
                          }}
                        >
                          View Yelp Page
                        </a>  
                        <br /> {this.props.selectedItem.display_phone}
                        <div
                          style={{
                            paddingTop: '6px'
                          }}
                        >
                          {this.props.selectedItem.location.display_address[0]}
                          <br /> {this.props.selectedItem.location.display_address[1]}
                        </div>
                      </div>
                    </div>
                  : 
                    <div>
                      <div style={{
                        fontSize: 24,
                        paddingTop: '7px',
                        paddingLeft: '7px',
                      }}>
                        {this.state.default.name}
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
                            value={this.state.default.rating}
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
                        ({this.state.default.review_count} reviews)
                        </div>
                      </div>
                      <div style={{
                        paddingLeft: '7px'
                      }}>
                        <i className='fa fa-external-link'/>
                        <a 
                          href={this.state.default.url} 
                          target="_blank"
                          style={{
                            paddingLeft: '3px'
                          }}
                        >
                          View Yelp Page
                        </a>  
                        <br /> {this.state.default.display_phone}
                        <div
                          style={{
                            paddingTop: '6px'
                          }}
                        >
                          {this.state.default.location.display_address[0]}
                          <br /> {this.state.default.location.display_address[1]}
                        </div>
                      </div>
                    </div>
                  }
                </div>
                <div style={{
                  width: '20%',
                  height: '100%',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center'
                }}>
                  {
                    this.props.selectedItem ? this.iconButtonHandler(this.props.selectedItem) : this.iconButtonHandler(this.state.default)
                  }
                </div>
              </div>
            </Paper>
          </div>
      </div>
    )
  }
}

export default Preview;

