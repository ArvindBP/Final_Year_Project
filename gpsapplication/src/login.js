import React from 'react';
import TextField from 'material-ui/TextField';
import Button from 'material-ui/Button';
import './login.css';
import history from './history'
import logo from './logo.svg';
import {
  HashRouter as Router,
  Route,
  Link,
  Switch,
  Redirect
} from 'react-router-dom'
export default class Login extends React.Component{
  constructor(props){
    super(props);
    this.state = {id:"",password:""};
    this.check= this.check.bind(this);
  }
  check(id,password){
    if(id=="admin" && password=="admin")
      history.push('./hello');
  }

	render(){
		return (
		<fragment>
		<header className="App-header centered">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to Assets Tracking System</h1>
        </header>
		<div className="loginfields centered" >
			<TextField 
          		id="with-placeholder"
          		label="Username"
          		placeholder="Username"
          		margin="normal"
              onChange={(e)=> this.setState({id:e.target.value})}
        	/>
        	<br />
        	<TextField
          		id="password-input"
          		label="Password"
          		type="password"
          		autoComplete="current-password"
          		margin="normal"
              onChange={(e)=> this.setState({password:e.target.value})}
        	/>
        	<br />
          
        	<Button variant="raised" color="primary" component={Link} to="/main" onClick={()=>this.check(this.state.id,this.state.password)}>
            Login
          </Button>
        </div>
        </fragment>
		);
	}
}