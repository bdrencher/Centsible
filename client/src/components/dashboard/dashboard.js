import React from 'react';
import PropTypes from 'prop-types';
import styles from './dashboard.module.css';

export class Dashboard extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="content">
        <div className="header">
          <h1>Dashboard</h1>
        </div>
      </div>
    )
  }
}
