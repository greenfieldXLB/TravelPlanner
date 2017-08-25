import React from 'react';

import Preview from './preview/index.jsx';
import Results from './results/index.jsx';

class Chooser extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedItem: 'hello'
    };
    // this.selectGridItem = this.selectGridItem.bind(this);
  }

  // selectGridItem() {
  //   console.log(target);
  //   this.setState({
  //     selectedItem: target
  //   });
  // }

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
        <Preview/>
        <Results/> 
      </div>
    )
  }
}

export default Chooser;