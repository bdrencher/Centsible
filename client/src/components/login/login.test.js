import React from 'react';
import ReactDOM from 'react-dom';
import login from './login';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<login />, div);
  ReactDOM.unmountComponentAtNode(div);
});