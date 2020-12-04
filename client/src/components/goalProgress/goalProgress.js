import React from 'react';
import PropTypes from 'prop-types';
import styles from './goalProgress.module.css';
import { BarChart, XAxis, YAxis, Tooltip, Legend, Bar } from 'recharts';

export default class GoalProgress extends React.Component {
  data = [{ name: "My Progress", Assets: 4000, Goal: 100000}]

  constructor(props) {
    console.log(this.props);
    super(props);
  }

  render() {
    return (
      <div className="goalProgressChart">
        <BarChart width={250} height={250}>
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