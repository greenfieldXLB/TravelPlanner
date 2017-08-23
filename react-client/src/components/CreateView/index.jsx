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
      stepIndex: 0,
      finished: false
    };
    this.handleNext = this.handleNext.bind(this);
    this.handlePrev = this.handlePrev.bind(this);
  }

  handleNext() {
    // console.log(this.state.stepIndex);
    const stepIndex = this.state.stepIndex;
    this.setState({
      stepIndex: stepIndex + 1,
      finished: stepIndex >= 3
    });
  }

  handlePrev() {
    // console.log(this.state.stepIndex);
    const stepIndex = this.state.stepIndex;
    if (stepIndex > 0) {
      this.setState({
        stepIndex: stepIndex - 1
      });
    }
  }

  getStepContent(stepIndex) {
    switch(stepIndex) {
      case 0:
        return <Destination />
      case 1:
        return <Chooser />
      case 2:
        return <Chooser />
      case 3:
        return <Chooser />
    }
  }

  render() {

    const {finished, stepIndex} = this.state;

    return (

      <div id="view-body" style={{
        height: '95%',
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