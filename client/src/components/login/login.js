import React from 'react';
import PropTypes from 'prop-types';
import styles from './login.module.css';

export class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      passhash: "",
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    this.setState({
      [name]: value
    });
  }

  handleSubmit = (event) => {

  }

  render () {
    return (
      <div className="content">
        <div className="login">
          <div className="header">
            <h1>Centsible</h1>
          </div>
          
        </div>
      </div>
    )
  }
}
