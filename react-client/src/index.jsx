import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar.jsx';

import LogIn from './components/LogIn.jsx'

import * as pages from './pages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      page: pages.LANDING
    }
    this.logIn = this.logIn.bind(this);
    this.changePage = this.changePage.bind(this);
  }

  logIn(user) {
    this.setState({
      user
    });
  }

  changePage(page) {
    this.setState({
      page
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <div>
          <Navbar
            changePage={this.changePage}
          />
          { this.getMainComponent() }
        </div>
      </MuiThemeProvider>
    )
  }

  getMainComponent() {
    /*if (!this.state.user) {
      return <LogIn login={this.login} />
    }*/
    switch (this.state.page) {
      case pages.LANDING:
        return <div> Landing </div>
      case pages.CREATE:
        return <div> Create </div>
      case pages.LIST:
        return <div> List </div>
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
