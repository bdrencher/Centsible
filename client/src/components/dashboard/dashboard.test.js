import React from 'react';
import ReactDOM from 'react-dom';
import dashboard from './dashboard';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<dashboard />, div);
  ReactDOM.unmountComponentAtNode(div);
});