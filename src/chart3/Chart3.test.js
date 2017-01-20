import React from 'react';
import ReactDOM from 'react-dom';
import Chart3 from './Chart3';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chart3 />, div);
});
