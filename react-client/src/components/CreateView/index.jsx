import React from 'react';

import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';
import Dialog from 'material-ui/Dialog';
import TextField from 'material-ui/TextField'
import Divider from 'material-ui/Divider';


import Destination from './destination/index.jsx';
import Chooser from './chooser/index.jsx';
import SaveBox from './chooser/saveBox.jsx';
import $ from 'jquery';

//CreateView component
class CreateView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      edit: false,
      submitted: false,
      saveBox: false,
      stepIndex: 0,
      hotels: [],
      attractions: [],
      restaurants: [],
      selectedItem: '',
      trip: {
        hotels: [],
        attractions: [],
        restaurants: [],
        destination: '',
      }
    };

    if (props.editing !== 'NEW') {
      this.state.trip = props.editing;
      Object.assign(
        this.state.trip,
        {
          hotels: this.state.trip.lodging,
          restaurants: this.state.trip.food
        }
      );
      
      this.state.searchText = props.editing.destination;
    }

    this.addToTrip = this.addToTrip.bind(this);
    this.removeFromTrip = this.removeFromTrip.bind(this);
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.leverageData = this.leverageData.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.triggerLoading = this.triggerLoading.bind(this);
    this.handleTileClick = this.handleTileClick.bind(this);
    this.updateCity = this.updateCity.bind(this);
    this.saveBox = this.saveBox.bind(this);
  }

  componentDidMount(){
    if (this.props.editing !== 'NEW') {
      this.updateCity();
    }
  }

  copyObject(object) {
    let tripData = {
      1: 'hotels',
      2: 'attractions',
      3: 'restaurants'
    };
    var key = tripData[this.state.stepIndex];
    var copy = JSON.stringify(object);
    var newState = JSON.parse(copy);
    return {key: key, state: newState};
  }

  removeFromTrip(item) {
    const {key, state} = this.copyObject(this.state.trip);
    for (var i = 0; i < state[key].length; i++) {
      if (item.id === state[key][i].id) {
        state[key].splice(i, 1);
        break;
      }
    }
    this.setState({
      trip: state
    });
  }

  addToTrip(item) {
    const {key, state} = this.copyObject(this.state.trip);
    state[key] = [...state[key]].concat(item);
    this.setState({
      trip: state
    });
  }

  saveBox() {
    this.setState({
      saveBox: !this.state.saveBox
    });
  }

  triggerLoading() {
    this.setState({
      submitted: true,
      loading: true
    });
  }

  handleTileClick(tile) {
    this.setState({
      selectedItem: tile
    });
  }

  handleNext() {
    if (this.state.stepIndex === 3) {
      this.saveBox();
    } else {
      const stepIndex = this.state.stepIndex;
      this.setState({
        stepIndex: stepIndex + 1,
        selectedItem: ''
      });
    }
  }

  handlePrev() {
    const stepIndex = this.state.stepIndex;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1,
        selectedItem: ''
      });
    }
  }

  handleUpdateInput(searchText) {
    let tripCopy = Object.assign({}, this.state.trip);
    tripCopy.destination = searchText;
    this.setState({
      searchText: searchText,
      trip: tripCopy
    });
  };

  updateCity() {
    this.triggerLoading();
    const endpoints = ['/hotels', '/attractions', '/food'];
    for (var i = 0; i < endpoints.length; i++) {
      $.ajax({
        url: endpoints[i],
        type: 'GET',
        data: {location: this.state.searchText},
        success: (data) => {
          this.leverageData(data);
        },
        error: (err) => {
          console.log('error: ', err);
        }
      });
    }
  }

  leverageData(data) {
    console.log(data.tag, data.data);

    switch(data.tag) {
      case 'hotels':
        if (this.state.loading) {
          this.setState({
            loading: false,
            hotels: data.data
          });
        } else {
          this.setState({
            hotels: data.data
          });
        }
        break;
      case 'attractions':
        this.setState({
          attractions: data.data
        });
        break;
      case 'restaurants':
        this.setState({
          restaurants: data.data
        });
        break;
    }
  }

  getStepContent(stepIndex) {
    if (stepIndex === 0) {
      return <Destination
        leverageData={this.leverageData}
        loading={this.state.loading}
        searchText={this.state.searchText}
        triggerLoading={this.triggerLoading}
        updateSearch={this.handleUpdateInput}
      />
    } else {
      let dataMap = {
        1: this.state.hotels,
        2: this.state.attractions,
        3: this.state.restaurants
      }

      return <Chooser
        data={dataMap[stepIndex]}
        destination={this.state.searchText}
        index={this.state.stepIndex}
        trip={this.state.trip}
        addToTrip={this.addToTrip}
        removeFromTrip={this.removeFromTrip}
        leverageData={this.leverageData}
        selectedItem={this.state.selectedItem}
        handleTileClick={this.handleTileClick}
        handleDrawerToggle={this.props.handleDrawerToggle}
        handleDrawerClose={this.props.handleDrawerClose}
        drawerIsOpen={this.props.drawerIsOpen}
      />
    }
  }

  render() {

    const {finished, stepIndex, searchText, loading, submitted} = this.state;

    let dialogBox = null;

    if (this.state.saveBox) {
      dialogBox = (
        <SaveBox
          destination={this.state.searchText}
          changePage={this.props.changePage}
          open={this.state.saveBox}
          toggle={this.saveBox}
          trip={this.state.trip}
          user={this.props.user}
        />
      )
    }

    return (

      <div id="view-body" style={{
        height: '92%',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
          <div id="create-view-component" style={{
            width: '100%',
            height: '90%',
            maxWidth: '1500px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'flex-start',
          }}>

              <Stepper activeStep={stepIndex}>
                <Step>
                  <StepLabel>Destination</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Lodging</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Attractions</StepLabel>
                </Step>
                <Step>
                  <StepLabel>Food</StepLabel>
                </Step>
              </Stepper>


              {this.getStepContent(stepIndex)}

              <div style={{
                height: '10%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
              }}>
                <FlatButton
                  label="Back"
                  disabled={stepIndex === 0}
                  onClick={this.handlePrev}
                  style={{marginRight: 12}}
                />
                <RaisedButton
                  label={stepIndex === 3 ? 'Save' : 'Next'}
                  disabled={!submitted || loading}
                  primary={true}
                  onClick={this.handleNext}
                />
              </div>
          </div>
          { dialogBox }
      </div>
    )
  }
}

export default CreateView;
