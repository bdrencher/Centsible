import React from 'react';
import styles from './goalSetter.module.css';
import { Input } from '@material-ui/core';
import { ApiCommunicator } from '../../services/apiCommunicator';
import { RetirementProfile } from '../../models/profile';

export class GoalSetter extends React.Component {
  constructor(props) {
    super(props);
    const api = new ApiCommunicator();
    api.retrieveRetirementProfile(localStorage.getItem('user'), localStorage.getItem('access_token'), (result) => {
      if (result.Success) {
        this.state = {
          currentAge: result.profile.currentAge,
          moneyPerYear: result.profile.retirementGoal,
          retirementAge: result.profile.retirementAge,
          currentAssets: result.profile.currentAssets
        }
      } else {
        this.state = {
          currentAge: 0,
          moneyPerYear: 0,
          retirementAge: 0,
          currentAssets: 0
        }
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
    const profile = new RetirementProfile(this.state.currentAge, this.state.retirementAge, this.state.currentAssets, this.state.moneyPerYear);
    submitApi.createRetirementProfile(localStorage.getItem('user'), localStorage.getItem('access_token'), profile);
    event.preventDefault();
  }

  render() {
    return (
      <div className="goalSetter">
        <h3>Goals</h3>
        <p>
          Please fill out this form to set your financial goal
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Your current age:
            <Input type="number" name="currentAge" value={this.state.currentAge} onChange={this.handleChange}></Input>
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