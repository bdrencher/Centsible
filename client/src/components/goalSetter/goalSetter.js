import React from 'react';
import styles from './goalSetter.module.css';
import { Input } from '@material-ui/core';
import { ApiCommunicator } from '../../services/apiCommunicator';
import { RetirementProfile } from '../../models/profile';

export class GoalSetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userAge: 0,
      timeStamp: new Date(),
      moneyPerYear: 0,
      retirementAge: 0,
      currentAssets: 0
    }
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
    const api = new ApiCommunicator();
    this.setState({
      timeStamp: Date.now(),
    });
    api.createRetirementProfile(localStorage.getItem('user'), localStorage.getItem('access_key'), )
    event.preventDefault();
  }

  render() {
    return (
      <div className="goalSetter">
        <h3>Goals</h3>
        <p>
          Please enter the following information about set your new financial goal.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your current age:
            <Input type="number" name="userAge" value={this.state.userAge} onChange={this.handleChange}></Input>
          </label>
          <label>
            Desired Retirement Age:
            <Input type="number" name="retirementAge" value={this.state.retirementAge} onChange={this.handleChange}></Input>
          </label>
          <label>
            Current assets:
            <Input type="number" name="currentAssets" value={this.state.currentAssets} onChange={this.handleChange}></Input>
          </label>
          <label>
            Desired funds per year during retirement:
            <Input type="number" name="moneyPerYear" value={this.state.moneyPerYear} onChange={this.handleChange}></Input>
          </label>
          <button type="submit" value="Submit">Save goals</button>
        </form>
      </div>
    )
  }
}