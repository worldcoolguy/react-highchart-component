import React from 'react';
import ReactDOM from 'react-dom';
import Chart1 from './chart1/Chart1';
import Chart2 from './chart2/Chart2';
import Chart3 from './chart3/Chart3';
import Chart4 from './chart4/Chart4';
import './index.css';

//Line Graph that displays minus to red, plus to blue, reverted Y axis.

ReactDOM.render(
  <Chart1 />,
  document.getElementById('chart_pane')
);

//Bar Graph that displays bar with transparent background.

ReactDOM.render(
  <Chart2 />,
  document.getElementById('chart_pane1')
);

//Circle Graph that displays two rings for multiple value.

ReactDOM.render(
  <Chart3 type="special"/>,
  document.getElementById('chart_pane2')
);

ReactDOM.render(
  <Chart3 type="normal"/>,
  document.getElementById('chart_pane3')
);

//Bar Graph that displays Zero values with different color.

ReactDOM.render(
  <Chart4 />,
  document.getElementById('chart_pane4')
);
