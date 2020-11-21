import React from 'react';
import ReactDOM from 'react-dom';
import createAccount from './createAccount';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<createAccount />, div);
  ReactDOM.unmountComponentAtNode(div);
});