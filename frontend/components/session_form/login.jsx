import React from 'react';
import { Link } from 'react-router-dom';

class LoginForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      username: '',
      email: '',
      password: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  }

  //username, email, password
  //any keys that match our state will get updated
  handleInput(type) {
    return (e) => {
      this.setState({[type]: e.target.value});
    };
  }

  componentWillUnmount() {
    this.props.clearErrors();
  }

  //if we successfully create a new user,
  //we want to have a callback function that will redirect us
  handleSubmit(e) {
    e.preventDefault();
    this.props.login(this.state).then(() => this.props.history.push('/'));
  }

  demoLogin(e) {
    const demoUser = {
      username: 'dahveed15',
      password: 'password'
    };
    e.preventDefault();
    this.props.login(demoUser).then(() => this.props.history.push('/'));
  }

  render() {
    return (
      <div className="outer-div">
        <div className="inner-div">
          <h2 className="signup-title">Log In!</h2>
          <form className="signup-form" onSubmit={this.handleSubmit}>
            <ul>
              {this.props.errors.map((error, idx) => <li key={idx}>{error}</li> )}
            </ul>
            <label>Username:
              <input
                type="text"
                value={this.state.username}
                onChange={this.handleInput('username')}
                autoFocus
                placeholder="Enter username" />
            </label>
            <label>Password:
              <input
                type="password"
                value={this.state.password}
                onChange={this.handleInput('password')} />
            </label>
            <button className="login-button" onClick={this.handleSubmit}>Log In</button>

            <button onClick={this.demoLogin}>Try it out!</button>
          </form>
        </div>
      </div>
    );
  }


}

export default LoginForm;