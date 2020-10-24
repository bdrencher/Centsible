import React from 'react';
import PropTypes from 'prop-types';
import styles from './FinanceEstimator.module.css';
import calculationHelper from '../../services/calculationHelper';

export class FinanceEstimator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDollars: 0,
      futureDollars: 0,
      years: 0,
      fund: -1,
      inflation: false
    };
  }

  handleChange = (event) => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;
    this.setState({
      [name]: value,
    });
  }

  handleSubmit = (event) => {
    this.state.futureDollars = calculationHelper.calculateInvestment(
                                                 this.state.currentDollars,
                                                 this.state.fund,
                                                 this.state.years,
                                                 this.state.inflation
                                                 );
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <label>
              Value in today's dollars:
              <input type="number" name="currentDollars" value={this.state.currentDollars} onChange={this.handleChange}></input>
            </label>
            <label>
              Years to maturity:
              <input type="number" name="years" value={this.state.years} onChange={this.handleChange}></input>
            </label>
            <label>
              Index fund:
              <select name="fund" value={this.state.fund} onChange={this.handleChange}>
                <option value="0">S&P500</option>
                <option value="1">NASDAQ</option>
                <option value="2">Russell 1000</option>
              </select>
            </label>
            <label>
              Account for inflation?
              <input name="inflation" type="checkbox" value={this.state.inflation} onChange={this.handleChange}></input>
            </label>
            <input type="submit" value="Submit"></input>
          </form>
          </div>
          <div>
            <p>
              Future value of your investment: {this.state.futureDollars}
            </p>
          </div>
      </div>
    )
  }
}