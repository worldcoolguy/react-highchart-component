import React, {Component} from 'react';
import Highcharts from 'highcharts';
import ReactHighcharts from 'react-highcharts';
import SolidGauge from 'highcharts-solid-gauge';
import HighchartsMore from 'highcharts-more';
import './Chart3.css';


HighchartsMore(ReactHighcharts.Highcharts);
SolidGauge(ReactHighcharts.Highcharts);

class Chart3 extends Component {

  constructor(props) {
        super(props);

        var FIRST_COLOR = 'rgba(32,112,204,0.9)';
        var SECOND_COLOR = 'rgba(151,151,151,0.4)';
        var ALPHA_SECOND_COLOR = 'rgba(151,151,151,0.1)';
        var FIRST_SIZE = '4em';
        var SECOND_SIZE = '2.5em';
        var OFFSET = -5;

        if (this.props.type === 'normal') {
          FIRST_SIZE = '3em';
          SECOND_SIZE = '3em';
          OFFSET = -15;
          FIRST_COLOR = Highcharts.getOptions().colors[2];
          SECOND_COLOR = Highcharts.getOptions().colors[0];
        }

        var data = [83, 50];

        var config = {
          chart: {
              type: 'solidgauge',
              width: 400,
              height: 400
          },
          credits:{
            enabled: false
          }, 
          
          title: {
            text: '<span style="font-size:' + FIRST_SIZE + '; color: ' + FIRST_COLOR + '; font-weight: bold">' + data[0] + '%</span><br>'
            + '<span style="font-size:' + SECOND_SIZE + '; color: ' + SECOND_COLOR + '; font-weight: bold">' + data[1] + '%</span>',
            verticalAlign: 'middle',
            y: OFFSET,
            floating: true,
            
          },

          pane: {
              startAngle: 0,
              endAngle: 360,
              background: [{
                  outerRadius: '104%',
                  innerRadius: '95%',
                  backgroundColor: ALPHA_SECOND_COLOR,
                  borderWidth: 0
              }]
          },

          yAxis: {
              min: 0,
              max: 100,
              lineWidth: 0,
              tickPositions: []
          },
          tooltip: {
            enabled: false
          },

          plotOptions: {
              solidgauge: {
                  borderWidth: '12px',
                  dataLabels: {
                      enabled: false
                  },
                  linecap: 'round',
                  stickyTracking: false
              }
          },

          series: [{
              name: 'Move',
              borderColor: FIRST_COLOR,
              data: [{
                  color: FIRST_COLOR,
                  radius: '100%',
                  innerRadius: '100%',
                  y: data[0]
              }]
          }, {
              name: 'Exercise',
              borderColor: SECOND_COLOR,
              data: [{
                  color: SECOND_COLOR,
                  radius: '75%',
                  innerRadius: '75%',
                  y: data[1]
              }]
          }]
        };

        this.state = {
            config: config,
            containerId: "chart1"
        };

    }

    componentWillMount() {
    }

    componentDidMount() {
    }

    componentWillUpdate() {
    }

    componentDidUpdate() {
    }

    componentWillUnmount() {
    }

    render() {
      return (
        React.createElement(ReactHighcharts, { config: this.state.config }, 
          React.createElement("div", {}))
      );
    }

    update(data) {
      this.setState({config: this.state.config, data: this.state.data});
    }
}

export default Chart3;
