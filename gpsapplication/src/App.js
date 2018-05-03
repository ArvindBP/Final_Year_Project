import React, { Component } from 'react';
import Login from './login';
import './App.css';
import ResponsiveDrawer from './responsivedrawer.js';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'

class App extends Component {
  constructor(props){
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <Route exact={true} exact path="/"  component={Login}/>
            <Route path="/main"  render = {()=><div><ResponsiveDrawer/></div>}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
