import React from 'react';
import styles from './dashboard.module.css';
import { Container, Button, Row, Col } from 'react-bootstrap';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  goToFinanceEstimator = () => {
    this.props.history.push("/investmentEstimator");
  }

  goToGoalSetter = () => {
    this.props.history.push("/myFinances");
  }

  goToAccountSettings = () => {
    this.props.history.push("/accountSettings");
  }

  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/");
  }

  render() {
    return (
      <div className="content">
        <div className="header">
          <h3>Dashboard</h3>
        </div>
        <div>
          <Container>
            <Row>
              <Col xs={6}>
                <Button onClick={this.goToFinanceEstimator}>Estimate an Investment</Button>
              </Col>
            </Row>
            <Row className={styles.secondaryButton}>
              <Col xs={6}>
               <Button onClick={this.goToGoalSetter}>My Finances</Button>
              </Col>
            </Row>
            <Row className={styles.secondaryButton}>
              <Col xs={6}>
                <Button onClick={this.goToAccountSettings}>Settings</Button>
              </Col>
            </Row>
            <Row className={styles.secondaryButton}>
              <Col xs={6}>
                <Button onClick={this.handleLogout}>Logout</Button>
              </Col>
            </Row>
          </Container>
        </div>
      </div>
    )
  }
}
