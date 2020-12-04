import React from 'react';
import styles from './goalSetter.module.css';
import { Input } from '@material-ui/core';
import { ApiCommunicator } from '../../services/apiCommunicator';
import { RetirementProfile } from '../../models/profile';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

export class GoalSetter extends React.Component {
  data = [{ name: "My Progress", Assets: 0, Goal: 0}]

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
        this.data[0].Goal = result.retirementGoal;
        this.data[0].Assets = result.currentAssets;
      }
    });
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    if (name == "currentAssets") {
      this.data[0].Assets = value;
    } else if (name == "fundGoal") {
      this.data[0].Goal = value;
    }
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    const submitApi = new ApiCommunicator();
    const profile = new RetirementProfile(this.state.currentAge, this.state.retirementAge, this.state.currentAssets, this.state.fundGoal);
    submitApi.createRetirementProfile(localStorage.getItem('user'), localStorage.getItem('access_token'), profile);
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
              Retirement fund goal:
              <Input type="number" name="fundGoal" value={this.state.fundGoal} onChange={this.handleChange}></Input>
            </label>
            <button type="submit" value="Submit">Save goals</button>
          </form>
        </div>
        <div>
          <h3>Tracking your progress</h3>
          <div className="goalProgressChart">
            <BarChart width={250} height={250} data={this.data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="Assets" fill="#FCA311" />
              <Bar dataKey="Goal" fill="#14213D" />
            </BarChart>
          </div>
        </div>
      </div>
    )
  }
}