import React from 'react';
import styles from './goalSetter.module.css';

export class goalSetter extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userBirthday: new Date(),
      timeStamp: new Date(),
      moneyPerYear: 0,
      retirementAge: 0,
      currentAssets: 0
    }
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    this.setState({
      timeStamp: Date.now(),
    });

    event.preventDefault();
  }

  render() {
    return (
      <div className="goalSetter">
        <h3>Goals</h3>
        <p>
          Please provide the following information about yourself and your
          financial goals.
        </p>
        <form onSubmit={this.handleSubmit}>
          <label>
            Birthdate:
            <input type="date" name="birthday" value={this.state.userBirthday} onChange={this.handleChange}></input>
          </label>
          <label>
            Desired Retirement Age:
            <input type="number" name="retirementAge" value={this.state.retirementAge} onChange={this.handleChange}></input>
          </label>
          <label>
            Current assets:
            <input type="number" name="currentAssets" value={this.state.currentAssets} onChange={this.handleChange}></input>
          </label>
          <label>
            Desired funds per year during retirement:
            <input type="number" name="moneyPerYear" value={this.state.moneyPerYear} onChange={this.handleChange}></input>
          </label>
          <button type="submit" value="Submit">Save goals</button>
        </form>
      </div>
    )
  }
}