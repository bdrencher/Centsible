import React from 'react';
import ReactDOM from 'react-dom';
import FinanceEstimator from './FinanceEstimator';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FinanceEstimator />, div);
  ReactDOM.unmountComponentAtNode(div);
});