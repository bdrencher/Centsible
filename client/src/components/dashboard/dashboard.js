import React from 'react';
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

  goToAccountSettings = () => {
    this.props.history.push("/accountSettings");
  }

  handleLogout = () => {
    localStorage.clear();
    this.props.history.push("/");
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
          <button onClick={this.goToAccountSettings}>Settings</button>
          <button onClick={this.handleLogout}>Logout</button>
        </div>
      </div>
    )
  }
}
