import React from 'react';
import PropTypes from 'prop-types';
import styles from './accountSettings.module.css';
import { Container, Button, Row, Col } from 'react-bootstrap';
import  { ApiCommunicator } from '../../services/apiCommunicator';

export class AccountSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete = () => {
    const api = new ApiCommunicator();
    api.deleteUser(localStorage.getItem('user'), localStorage.getItem('access_token'));
    this.props.history.push("/");
  }

  handleReturnToDashboard = () => {
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div class="content">
        <div>
          <h3>Settings</h3>
        </div>
        <Container>
          <Row>
            <Col>
              <Button onClick={this.handleDelete}>Delete my account</Button>
            </Col>
          </Row>
          <Row className={styles.topSpace}>
            <Col>
              <Button onClick={this.handleReturnToDashboard}>Return to dashboard</Button>
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}