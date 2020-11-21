import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';
import { ApiCommunicator } from '../../services/apiCommunicator';
import { Input } from '@material-ui/core';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {
    const api = new ApiCommunicator();
    const result = api.validateCredentials(this.state.username, this.state.password);
    if (result) {
      this.props.history.push("/dashboard");
    } else {
      alert("Login failed, please try again or create an account.")
    }
    event.preventDefault();
  }

  handleClick = () => {
    this.props.history.push("/createAccount");
  }

  render () {
    return (
      <div className="content">
        <div className="header">
          <h1>Centsible</h1>
        </div>
        <div>
          <form>
            <label>Username
              <Input type="text" name="username" onChange={this.handleChange}></Input>
            </label>
            <label>Password
              <Input type="password" name="password" onChange={this.handleChange}></Input>
            </label>
            <button onClick={this.handleSubmit}>Login</button>
          </form>
          <div>
            <button onClick={this.handleClick}>Create Account</button>
          </div>
        </div>
      </div>
    )
  }
}
