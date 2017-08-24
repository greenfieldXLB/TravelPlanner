import React from 'react';
import FacebookLogin from 'react-facebook-login';

const LogIn = (props) => {
  return (
    <div style={{height: '100px'}}>
      <FacebookLogin
        appId='1440382699372121'
        fields='name,email,picture'
        callback={props.logIn}
        autoLoad={true}
        icon="fa-facebook"
      />
    </div>
  )
};

export default LogIn;
