import React from 'react';
import PropTypes from 'prop-types';
import styles from './goalProgress.module.css';

export class GoalProgress extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="goalProgressChart">
        <BarChart width={250} height={250} data={this.props.data}>
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="Current Assets" fill="#FCA311" />
          <Bar dataKey="Goal" fill="#14213D" />
        </BarChart>
      </div>
    )
  }
}