import React from 'react';

const Preview = (props) => (

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
        width: '95%',
        height: '60%',
        backgroundColor: '#a6a6a6'
      }}>
        image
      </div>
      <div style={{
        width: '95%',
        height: '30%',
        backgroundColor: '#cccccc'
      }}>
        Info
      </div>
  </div>

)

export default Preview;