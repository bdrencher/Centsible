import React from 'react';
import ReactDOM from 'react-dom';
import goalSetter from './goalSetter';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<goalSetter />, div);
  ReactDOM.unmountComponentAtNode(div);
});