import React from 'react';

import Preview from './preview/index.jsx';
import Results from './results/index.jsx';

const Chooser = (props) => (

  <div id="selection-component" style={{
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    backgroundColor: '#cccccc'
  }}>
      
      <Preview />

      <Results results={props.data}/>
      
  </div>

)

export default Chooser;