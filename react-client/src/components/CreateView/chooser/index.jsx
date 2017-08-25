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
      selectedItem: '',
      mode: modes.GRID
    };
    this.modes = modes;
    this.changeMode = this.changeMode.bind(this);
  }
  
  changeMode(mode) {
    console.log(mode);
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
          data={this.props.selectedItem}
        />

        <Results
          data={this.props.data} 
          selectGridItem={this.props.selectGridItem}
          handleTileClick={this.props.handleTileClick}
          mode={this.state.mode}
          changeMode={this.changeMode}
        /> 
      </div>
    )
  }
}

export default Chooser;