import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import CreateView from './components/CreateView/index.jsx';
import Navbar from './components/Navbar.jsx';

import LogIn from './components/LogIn.jsx'

import * as styles from './styles';
import * as pages from './pages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      page: pages.LANDING,
    };
    this.logIn = this.logIn.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  changePage(page) {
    this.setState({
      page
    });
  }

  logIn(user) {
    this.setState({
      user
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          {
            this.state.user && this.state.page !== pages.LANDING ?

            <div>
              <Navbar
                changePage={this.changePage}
              />
              { this.getMainComponent() }
            </div>

            :

            <div style={_.extend(
              styles.CENTERED,
              styles.FIXED_PAGE,
              {flexFlow: 'column'}
            )} >
              <img
                style={{width: '500px', marginBottom: '20px'}}
                src='http://i.imgur.com/m2cZCRZ.png'
              />
              { this.getMainComponent() }
            </div>
          }
        </div>
      </MuiThemeProvider>
    )
  }

  getMainComponent() {
    if (!this.state.user) {
      return <LogIn logIn={this.logIn} />
    }
    switch (this.state.page) {
      case pages.LANDING:
        return <div style={{height: '100px'}}> Landing </div>
      case pages.CREATE:
        return <div> Create </div>
      case pages.LIST:
        return <div> List </div>
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
