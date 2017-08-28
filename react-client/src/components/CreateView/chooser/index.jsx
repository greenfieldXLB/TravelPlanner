import React from 'react';

import Preview from './preview/index.jsx';
import Results from './results/index.jsx';

const modes = {
  GRID: 'GRID',
  MAP: 'MAP'
};

class Chooser extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      mode: modes.GRID
    };
    this.modes = modes;
    this.changeMode = this.changeMode.bind(this);
  }

  changeMode(mode) {
    if (Object.values(this.modes).includes(mode)) {
      this.setState({ mode });
    } else {
      throw `Invalid mode: ${mode}`
    }
  }

  render() {
    return (
      <div
        id="selection-component"
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-evenly',
          alignItems: 'center',
          backgroundColor: '#cccccc'
        }}
      >
        <Preview
          selectedItem={this.props.selectedItem}
          data={this.props.data}
          index={this.props.index}
          trip={this.props.trip}
          addToTrip={this.props.addToTrip}
          removeFromTrip={this.props.removeFromTrip}
        />

        <Results
          data={this.props.data}
          destination={this.props.destination}
          index={this.props.index}
          trip={this.props.trip}
          addToTrip={this.props.addToTrip}
          removeFromTrip={this.props.removeFromTrip}
          selectGridItem={this.props.selectGridItem}
          handleTileClick={this.props.handleTileClick}
          leverageData={this.props.leverageData}
          mode={this.state.mode}
          changeMode={this.changeMode}
          handleDrawerToggle={this.props.handleDrawerToggle}
          drawerIsOpen={this.props.drawerIsOpen}
          handleDrawerClose={this.props.handleDrawerClose}
        />
      </div>
    )
  }
}

export default Chooser;
