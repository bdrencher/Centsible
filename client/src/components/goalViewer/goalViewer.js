import React from 'react';
import Chart from "react-google-charts";
import PropTypes from 'prop-types';
import styles from './goalViewer.module.css';

export class goalViewer extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Chart
        chartType="BarChart"
        loader={<div>Retrieving your data...</div>}
        data={[
          ['Fund', 'data'],
          ['My assets', props.assets],
          ['My goal', props.goal]
        ]}
        options={{
          title: 'My Financial Standing'
        }}></Chart>
      </div>
    )
  }
}
