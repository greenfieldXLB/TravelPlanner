import React from 'react';
import SavedFlightPanel from './SavedFlightPanel.jsx';
import SavedHotelPanel from './SavedHotelPanel.jsx';
import SavedFoodPanel from './SavedFoodPanel.jsx';
import SavedAttractionPanel from './SavedAttractionPanel.jsx';

class SavedRecordPanel extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    console.log('the props for this trip are ', this.props.trip)
    return(
      <div>
        <SavedFlightPanel trip = {this.props.trip}/>
        <SavedHotelPanel trip = {this.props.trip} />
        <SavedAttractionPanel trip = {this.props.trip} />
        <SavedFoodPanel trip = {this.props.trip}/>
      </div>
    )
  }
}

export default SavedRecordPanel;
