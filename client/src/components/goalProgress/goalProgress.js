import React from 'react';
import PropTypes from 'prop-types';
import styles from './goalProgress.module.css';
import Chart from "react-google-charts";
import { ApiCommunicator } from '../../services/apiCommunicator';

export default class GoalProgress extends React.Component {
  data = { name: "", Goal: 0, Assets: 0 };

  constructor(props) {
    super(props);

    const api = new ApiCommunicator();
    api.retrieveRetirementProfile(localStorage.getItem('user'), localStorage.getItem('access_token'), (result) => {
      if (result) {
        this.data.name = "My Progress";
        this.data.Goal = result.retirementGoal;
        this.data.Assets = result.currentAssets;
      }
    });
  }

  render() {
    return (
      <div className="goalProgressChart">
        <Chart
        width={'250px'}
        height={'250px'}
        chartType="Bar"
        loader={<div>Loading Personal Progress Chart</div>}
        data={[
          ['', 'Assets', 'Goal'],
          [this.data.name, this.data.Assets, this.data.Goal]
        ]}
        options={{
          chart: {
            title: "Progress Chart",
          }
        }}
        />
      </div>
    )
  }
}