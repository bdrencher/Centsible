import React from 'react';
import styles from './FinanceEstimator.module.css';
import calculationHelper from '../../services/calculationHelper';
import { Input, Checkbox, Select } from '@material-ui/core';
import { Container, Button, Row, Col } from 'react-bootstrap';

export class FinanceEstimator extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentDollars: 0,
      futureDollars: 0,
      years: 0,
      fund: 0,
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
    this.setState({futureDollars: calculationHelper.calculateInvestment(
                                                 this.state.currentDollars,
                                                 this.state.fund,
                                                 this.state.years,
                                                 this.state.inflation
                                                 )});
    event.preventDefault();
  }

  render() {
    return (
      <div>
        <div>
          <h2>Estimate investment value</h2>
        </div>
        <div>
          <form onSubmit={this.handleSubmit}>
            <Container>
              <Row>
                <Col>
                  <label>
                    Value in today's dollars:
                    <Input type="number" name="currentDollars" value={this.state.currentDollars} onChange={this.handleChange}></Input>
                  </label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>
                    Years to maturity:
                    <Input type="number" name="years" value={this.state.years} onChange={this.handleChange}></Input>
                  </label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>
                    Index fund:
                    <Select name="fund" value={this.state.fund} onChange={this.handleChange}>
                      <option value="0">S&P500</option>
                      <option value="1">NASDAQ</option>
                      <option value="2">Russell 1000</option>
                    </Select>
                  </label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <label>
                    Account for inflation?
                    <Checkbox name="inflation" type="checkbox" value={this.state.inflation} onChange={this.handleChange}></Checkbox>
                  </label>
                </Col>
              </Row>
              <Row>
                <Col>
                  <Button type="submit" value="Submit"></Button>
                </Col>
              </Row>
            </Container>
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