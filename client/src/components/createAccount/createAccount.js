import React from 'react';
import PropTypes from 'prop-types';
import styles from './createAccount.module.css';
import { ApiCommunicator } from '../../services/apiCommunicator';
import { Input } from '@material-ui/core';

export class CreateAccount extends React.Component {
  apiCommunicator = new ApiCommunicator();

  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
      confirmPassword: ""
    }
  }

  handleSubmit = (event) => {
    if (this.state.password != this.state.confirmPassword) {
      alert("The passwords do not match, please try again.")
    } else if (this.state.username != "" && this.state.password != "") {
      this.apiCommunicator.createUser(this.state.username, this.state.password);
      this.props.history.push("/dashboard");
    }
    event.preventDefault();
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value
    });
  }

  render() {
    return (
      <div className="content">
        <form onSubmit={this.handleSubmit}>
          <label>
            Username:
            <Input type="text" name="username" onChange={this.handleChange}></Input>
          </label>
          <label>
            Password:
            <Input type="password" name="password" onChange={this.handleChange}></Input>
          </label>
          <label>
            Confirm Password:
            <Input type="password" name="confirmPassword" onChange={this.handleChange}></Input>
          </label>
          <button type="submit">Submit</button>
        </form>
        <button onClick={this.props.history.push("/")}>Return to Login</button>
      </div>
    )
  }
}