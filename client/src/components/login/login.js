import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';
import { ApiCommunicator } from '../../services/apiCommunicator';
import { Input } from '@material-ui/core';
import { Grid } from '@material-ui/core/Grid';

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
    api.validateCredentials(this.state.username, this.state.password, (result) => {
      if (result) {
        this.props.history.push("/dashboard");
      }
    });
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
          <Grid container spacing={3}>
            <form>
              <Grid item xs={8}>
                <label>Username
                  <Input type="text" name="username" onChange={this.handleChange}></Input>
                </label>
              </Grid>
              <Grid item xs={8}>
                <label>Password
                  <Input type="password" name="password" onChange={this.handleChange}></Input>
                </label>
              </Grid>
              <Grid item xs={4}>
                <button onClick={this.handleSubmit}>Login</button>
              </Grid>
            </form>
            <Grid item xs={4}>
              <div>
                <button onClick={this.handleClick}>Create Account</button>
              </div>
            </Grid>
          </Grid>
          </div>
      </div>
    )
  }
}
