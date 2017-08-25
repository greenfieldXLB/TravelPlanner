import React from 'react';

import { Step, Stepper, StepLabel } from 'material-ui/Stepper';
import RaisedButton from 'material-ui/RaisedButton';
import FlatButton from 'material-ui/FlatButton';

import Destination from './destination/index.jsx';
import Chooser from './chooser/index.jsx';

class CreateView extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: '',
      submitted: false,
      stepIndex: 0,
      finished: false,
      loading: false,
      hotels: {},
      attractions: {},
      restaurants: {}
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
    this.leverageData = this.leverageData.bind(this);
    this.handleUpdateInput = this.handleUpdateInput.bind(this);
    this.triggerLoading = this.triggerLoading.bind(this);
  }

  triggerLoading() {
    this.setState({
      submitted: true,
      loading: true
    });
  }

  handleNext() {
    const stepIndex = this.state.stepIndex;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3
    });
  }

  handlePrev() {
    const stepIndex = this.state.stepIndex;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1
      });
    }
  }

  handleUpdateInput(searchText) {
    this.setState({
      searchText: searchText,
    });
  };

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
    switch(stepIndex) {
      case 0:
        return <Destination 
                  leverageData={this.leverageData} 
                  loading={this.state.loading}
                  searchText={this.state.searchText} 
                  triggerLoading={this.triggerLoading}
                  updateSearch={this.handleUpdateInput}
               />
      case 1:
        return <Chooser 
                  data={this.state.hotels} 
                  destination={this.state.searchText}
                  index={this.state.stepIndex}
                  leverageData={this.leverageData} 
               />
      case 2:
        return <Chooser 
                  data={this.state.attractions}
                  destination={this.state.searchText}
                  index={this.state.stepIndex}
                  leverageData={this.leverageData} 
               />
      case 3:
        return <Chooser 
                  data={this.state.restaurants}
                  destination={this.state.searchText}
                  index={this.state.stepIndex}
                  leverageData={this.leverageData} 
               />
    }
  }

  render() {

    const {finished, stepIndex, searchText, loading, submitted} = this.state;

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
                  <StepLabel>Hotel</StepLabel>
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
                  label={stepIndex === 3 ? 'Finish' : 'Next'}
                  disabled={!submitted || loading}
                  primary={true}
                  onClick={this.handleNext}
                />
              </div>

          </div>
      </div>

    )

  }

}

export default CreateView;