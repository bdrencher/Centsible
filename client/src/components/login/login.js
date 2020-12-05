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

  handleGuest = () => {
    this.props.history.push("/investmentEstimator")
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
              <Col xs={12}>
                <label>Username: 
                  <Input type="text" name="username" onChange={this.handleChange}></Input>
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <label>Password: 
                  <Input type="password" name="password" onChange={this.handleChange}></Input>
                </label>
              </Col> 
            </Row>
            <Row>
              <Col xs={12}>
                <Button onClick={this.handleSubmit}>Login</Button>
              </Col>
            </Row>
          </form>
        </Container>
        <Container className={styles.otherOptions}>
          <Row>
            <Col>
            Don't have an account?
            </Col>
          </Row>
          <Row>
            <Col>
              <div>
                <Button onClick={this.handleClick}>Create an account</Button>
              </div>
            </Col>
            <Col xs={1}>or</Col>
            <Col>
              <div>
                <Button onClick={this.handleGuest}>Continue as guest</Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}
