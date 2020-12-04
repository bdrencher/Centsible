import React from 'react';
import ReactDOM from 'react-dom';
import goalProgress from './goalProgress';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<goalProgress />, div);
  ReactDOM.unmountComponentAtNode(div);
});