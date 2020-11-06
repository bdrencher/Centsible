import React from 'react';
import ReactDOM from 'react-dom';
import goalViewer from './goalViewer';

it('It should mount', () => {
  const div = document.createElement('div');
  ReactDOM.render(<goalViewer />, div);
  ReactDOM.unmountComponentAtNode(div);
});