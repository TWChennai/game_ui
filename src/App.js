import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Switch, withRouter} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import LevelOne from "./LevelOne";
import MainPage from "./MainPage";

class App extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo"/>
            <p>
              Edit <code>src/App.js</code> and save to reload.
            </p>
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          </header>
          <Switch>
            <Route path='/' exact render={routeProps => (<MainPage {...routeProps} />)}/>
            <Route path='/levelOne' render={routeProps => (<LevelOne {...routeProps} />)}/>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;