import React from 'react';
import ReactDOM from 'react-dom';
import accountSettings from './accountSettings';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<accountSettings />, div);
  ReactDOM.unmountComponentAtNode(div);
});