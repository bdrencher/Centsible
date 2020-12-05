import React from 'react';
import PropTypes from 'prop-types';
import styles from './goalProgress.module.css';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';
import { ApiCommunicator } from '../../services/apiCommunicator';

export default class GoalProgress extends React.Component {
  data;

  constructor(props) {
    super(props);

    const api = new ApiCommunicator();
    api.retrieveRetirementProfile(localStorage.getItem('user'), localStorage.getItem('access_token'), (result) => {
      if (result) {
        this.data[0].name = "My Progress";
        this.data[0].Goal = result.retirementGoal;
        this.data[0].Assets = result.currentAssets;
        this.forceUpdate();
      }
    });
  }

  render() {
    return (
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
    )
  }
}