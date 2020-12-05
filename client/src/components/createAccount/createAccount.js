import React from 'react';
import PropTypes from 'prop-types';
import styles from './createAccount.module.css';
import { ApiCommunicator } from '../../services/apiCommunicator';
import { Input } from '@material-ui/core';
import { Container, Button, Row, Col } from 'react-bootstrap';

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

  handleClick = () => {
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="content">
        <h1>
          Create an account
        </h1>
        <form onSubmit={this.handleSubmit}>
          <Container>
            <Row>
              <Col xs={12}>
                <label>
                  Username:
                  <Input type="text" name="username" onChange={this.handleChange}></Input>
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <label>
                  Password:
                  <Input type="password" name="password" onChange={this.handleChange}></Input>
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <label>
                  Confirm Password:
                  <Input type="password" name="confirmPassword" onChange={this.handleChange}></Input>
                </label>
              </Col>
            </Row>
            <Row>
              <Col xs={12}>
                <Button type="submit">Submit</Button>
              </Col>
            </Row>
          </Container>
        </form>
        <Container>
          <Row>
            <Col>
              <Button className={styles.backNav} onClick={this.handleClick}>Return to Login</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}