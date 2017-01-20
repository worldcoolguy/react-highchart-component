import React from 'react';
import ReactDOM from 'react-dom';
import Chart2 from './Chart2';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Chart2 />, div);
});
