import React from 'react';
import PropTypes from 'prop-types';
import styles from './goalProgress.module.css';
import Chart from "react-google-charts";
import { ApiCommunicator } from '../../services/apiCommunicator';

export default class GoalProgress extends React.Component {
  name;
  goal;
  assets;


  constructor(props) {
    super(props);

    const api = new ApiCommunicator();
    api.retrieveRetirementProfile(localStorage.getItem('user'), localStorage.getItem('access_token'), (result) => {
      if (result) {
        this.name = "My Progress";
        this.goal = result.retirementGoal;
        this.assets = result.currentAssets;
        this.forceUpdate();
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
          [' ', 'Assets', 'Goal'],
          [this.name, this.assets, this.goal]
        ]}
        options={{
          title: "Progress Chart",
          hAxis: {
            title: "Dollars ($)",
            minValue: 0
          }
        }}
        />
      </div>
    )
  }
}