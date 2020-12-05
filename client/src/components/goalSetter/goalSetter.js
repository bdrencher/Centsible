import React from 'react';
import styles from './goalSetter.module.css';
import { Input } from '@material-ui/core';
import { Container, Button, Row, Col } from 'react-bootstrap';
import { ApiCommunicator } from '../../services/apiCommunicator';
import { RetirementProfile } from '../../models/profile';
import GoalProgress from '../goalProgress/goalProgress';

export class GoalSetter extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      currentAge: 0,
      fundGoal: 0,
      retirementAge: 0,
      currentAssets: 0
    }

    const api = new ApiCommunicator();
    api.retrieveRetirementProfile(localStorage.getItem('user'), localStorage.getItem('access_token'), (result) => {
      if (result) {
        this.setState({
          currentAge: result.currentAge,
          fundGoal: result.retirementGoal,
          retirementAge: result.retirementAge,
          currentAssets: result.currentAssets
        });
      }
    });
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    const submitApi = new ApiCommunicator();
    const profile = new RetirementProfile(this.state.currentAge, this.state.retirementAge, this.state.currentAssets, this.state.fundGoal);
    submitApi.createRetirementProfile(localStorage.getItem('user'), localStorage.getItem('access_token'), profile);
    alert("Your retirement goals have been saved")
    event.preventDefault();
  }

  render() {
    return (
      <div className="goalSetter">
        <div>
          <h3>Goals</h3>
          <p>
            Please fill out this form to set your financial goal
          </p>
          <form onSubmit={this.handleSubmit}>
            <Container>
              <Row>
                <Col>
                  <label>
                    Your current age:
                    <Input type="number" name="currentAge" value={this.state.currentAge} onChange={this.handleChange}></Input>
                  </label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>
                    Desired Retirement Age:
                    <Input type="number" name="retirementAge" value={this.state.retirementAge} onChange={this.handleChange}></Input>
                  </label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>
                    Current assets:
                    <Input type="number" name="currentAssets" value={this.state.currentAssets} onChange={this.handleChange}></Input>
                  </label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>
                    Retirement fund goal:
                    <Input type="number" name="fundGoal" value={this.state.fundGoal} onChange={this.handleChange}></Input>
                  </label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button type="submit" value="Submit">Save goals</Button>
                </Col>
              </Row>
            </Container>
          </form>
        </div>
        <div className={styles.topSpace}>
          <h4>Tracking your progress</h4>
          <GoalProgress></GoalProgress>
        </div>
      </div>
    )
  }
}