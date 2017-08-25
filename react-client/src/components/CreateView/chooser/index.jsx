import React from 'react';

import Preview from './preview/index.jsx';
import Results from './results/index.jsx';

const MODES = {
  GRID: 'GRID',
  MAP: 'MAP'
};

class Chooser extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: '',
      mode: MODES.GRID
    };
    this.MODES = MODES;
    this.handleTileClick = this.handleTileClick.bind(this);
    this.switchMode = this.switchMode.bind(this);
  }
  
  switchMode(mode) {
    if (Object.values(this.MODES).includes(mode)) {
      this.setState({ mode });
    } else {
      throw `Invalid mode: ${mode}`
    }
  }

  handleTileClick(tile) {
    console.log('tile', tile);
    this.setState({
      selectedItem: tile
    });
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
        }}>
        <Preview 
          data={this.state.selectedItem}
        />

        <Results
          data={this.props.data}
          destination={this.props.destination}
          index={this.props.index}
          leverageData={this.props.leverageData}
          selectGridItem={this.selectGridItem}
          handleTileClick={this.handleTileClick}
        /> 
      </div>
    )
  }
}

Chooser.MODES = MODES;

export default Chooser;