import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';
import { ApiCommunicator } from '../../services/apiCommunicator';
import { Input } from '@material-ui/core';
import { Container, Button, Row, Col } from 'react-bootstrap';

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
        <Container>
          <form>
            <Row>
              <Col xs>
                <label>Username
                  <Input type="text" name="username" onChange={this.handleChange}></Input>
                </label>
              </Col>
              <Col xs>
                <label>Password
                  <Input type="password" name="password" onChange={this.handleChange}></Input>
                </label>
              </Col> 
            </Row>
            <Button onClick={this.handleSubmit}>Login</Button>
          </form>
          <div>
            <Button onClick={this.handleClick}>Create Account</Button>
          </div>
        </Container>
      </div>
    )
  }
}
