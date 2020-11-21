import React from 'react';
import PropTypes from 'prop-types';
import styles from './accountSettings.module.css';
import  { ApiCommunicator } from '../../services/apiCommunicator';

export class AccountSettings extends React.Component {
  constructor(props) {
    super(props);
  }

  handleDelete = () => {
    const api = new ApiCommunicator();
    api.deleteUser(localStorage.getItem('user'), localStorage.getItem('access_token'));
    this.props.history.push("/");
  }

  handleReturnToDashboard = () => {
    this.props.history.push("/dashboard");
  }

  render() {
    return (
      <div class="content">
        <div>
          <button onClick={this.handleDelete}>Delete my account</button>
          <button onClick={this.handleReturnToDashboard}>Return to dashboard</button>
        </div>
      </div>
    )
  }
}