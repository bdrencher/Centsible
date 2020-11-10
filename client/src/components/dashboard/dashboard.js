import React from 'react';
import PropTypes from 'prop-types';
import styles from './dashboard.module.css';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  goToFinanceEstimator = () => {
    this.props.history.push("/financeEstimator");
  }

  goToGoalSetter = () => {
    this.props.history.push("/myFinances");
  }

  render() {
    return (
      <div className="content">
        <div className="header">
          <h1>Dashboard</h1>
        </div>
        <div>
          <button onClick={this.goToFinanceEstimator}>Estimate an Investment</button>
          <button onClick={this.goToGoalSetter}>My Finances</button>
        </div>
      </div>
    )
  }
}
