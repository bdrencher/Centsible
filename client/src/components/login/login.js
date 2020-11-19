import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';
import { ApiCommunicator } from '../../services/apiCommunicator';

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
    api.validateCredentials(this.state.username, this.state.password);
    event.preventDefault();
  }

  handleClick = () => {
    this.props.history.push("/dashboard");
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
              <input type="text" name="username" onChange={this.handleChange}></input>
            </label>
            <label>Password
              <input type="password" name="password" onChange={this.handleChange}></input>
            </label>
            <button onClick={this.handleSubmit}>Login</button>
          </form>
        </div>
      </div>
    )
  }
}
