import React from 'react';
import { useHistory } from "react-router-dom";
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

  handleClick() {
    const history = useHistory();
    history.push("/dashboard");
  }

  render () {
    return (
      <div className="content">
        <div className="header">
          <h1>Centsible</h1>
        </div>
        <div>
          <form>
            <label>Username
              <input type="text"></input>
            </label>
            <label>Password
              <input type="password"></input>
            </label>
            <button onClick={handleClick}>Login</button>
          </form>
        </div>
      </div>
    )
  }
}
