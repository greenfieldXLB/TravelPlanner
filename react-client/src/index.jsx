import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import _ from 'lodash';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Navbar from './components/Navbar.jsx';
import CreateView from './components/CreateView/index.jsx';
import ViewTrips from './components/ViewTrips/index.jsx';
import LogIn from './components/LogIn.jsx';
import Landing from './components/Landing.jsx';

import * as styles from './styles';
import * as pages from './pages';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: null,
      trips: [],
      editing: 'NEW',
      page: pages.LANDING,
      drawerIsOpen: false,
    };
    this.logIn = this.logIn.bind(this);
    this.changePage = this.changePage.bind(this);
    this.handleDrawerToggle = this.handleDrawerToggle.bind(this);
    this.handleDrawerClose = this.handleDrawerClose.bind(this);
    this.setDrawerState = this.setDrawerState.bind(this);
  }

  createToView(trips, page) {
    this.setState({
      trips: trips,
      page: page
    });
  }

  changePage(page, options={}) {
    let stateChange = {
      page: page
    };

    for (let key in options) {
      stateChange[key] = options[key];
    }

    this.setState(stateChange);
  }

  logIn(user) {
    let postData = JSON.stringify({
      facebookId: user.id,
      name: user.name,
      email: user.email
    });
    $.ajax({
      method: 'POST',
      url: '/logIn',
      data: postData,
      contentType: 'application/json',
      dataType: 'json'
    }).then((data) => {
      console.log('data from login: ', data.trips);
      this.setState({
        user,
        trips: data.trips
      });
    });
  }

  handleDrawerToggle() {
    this.setState({
      drawerIsOpen: !this.state.drawerIsOpen
    });
  }

  handleDrawerClose() {
    console.log('hello')
    this.setState({
      drawerIsOpen: false
    });
  }

  setDrawerState(status) {
    this.setState({ drawerIsOpen: status
    });
  }

  render () {
    return (
      <MuiThemeProvider>
        <div style={{height: '100%'}}>
          {
            this.state.user && this.state.page !== pages.LANDING ?

            <div style={{height: '100%'}}>
              <Navbar
                changePage={this.changePage}
                user={this.state.user}
                page={this.state.page}
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
        return <Landing changePage={this.changePage} />
      case pages.CREATE:
        return <CreateView
          changePage={this.changePage}
          handleDrawerToggle={this.handleDrawerToggle}
          handleDrawerClose={this.handleDrawerClose}
          drawerIsOpen={this.state.drawerIsOpen}
          user={this.state.user}
          editing={this.state.editing}
        />
      case pages.LIST:
        return <ViewTrips
          changePage={this.changePage}
          user={this.state.user}
          trips={this.state.trips}
        />
    }
  }
}

ReactDOM.render(<App />, document.getElementById('app'));
