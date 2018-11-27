import React, { Component } from 'react';





class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {login: '', password: ''};

    this.onLoginChange = this.onLoginChange.bind(this);
    this.onPasswordChange = this.onPasswordChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onSubmit(event){
    alert(`${this.state.login}, добро пожаловать!`);
    event.preventDefault();
  }

  onPasswordChange(event){
    this.setState({password: event.target.value});
  }

  onLoginChange(event) {
    this.setState({login: event.target.value});
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <p><label> Логин: <input type="text" name="login" value={this.state.login}
                         onChange={this.onLoginChange}/></label></p>
        <p><label> Пароль: <input type="password" name="password" value={this.state.password}
                          onChange={this.onPasswordChange}/></label></p>
        <p><input type="submit" value="Submit" /></p>
      </form>
    );
  }
}


export default Login;
