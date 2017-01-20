import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import './Chart2.css';

class Chart2 extends Component {

  constructor(props) {
        super(props);

        var FIRST_COLOR = 'rgba(32,112,204,0.9)';
        var SECOND_COLOR = 'rgba(151,151,151,0.4)';
        var ALPHA_SECOND_COLOR = 'rgba(151,151,151,0.1)';
        var ORIGIN_SECOND_COLOR = 'rgba(151,151,151,1)';
        var LINE_WIDTH = 15;
        var LABEL_PADDING = 80;

        var data = [305, 212];

        var config = {
          chart: {
              width: 600,
              height: 200,
              type: 'column',
              inverted: true
          },
          title: {
              text: 'Chart2'
          },  
          xAxis: {
              reversed:true,
              visible: false,
              min: 0,
              max: 2,
              tickInterval: 0.8
          },
          yAxis: {
              reversed:false,
              visible: false,
          },    
          plotOptions: {
              column: {
                  dataLabels: {
                      enabled: true,                    
                  },
                  grouping: false,
                  shadow: false
              },
              series: {
                  borderRadius: 10,
                  lineWidth: 10,
                  groupPadding: 0.5,
              }
          },   
          credits: {
              enabled: false
          },
          series: [
          {
              name: 'Bar0',
              data: [{
                x: 0.3,
                y: this.getMax(data)
              }],
              animation: false,
              color: ALPHA_SECOND_COLOR,
              pointWidth: LINE_WIDTH,
              dataLabels: {
                x: LABEL_PADDING,
                formatter: function(){
                  return data[0];
                },
                style: {
                        fontSize: '1.8em',
                        fontWeight: 'normal',
                        color: ORIGIN_SECOND_COLOR
                }
              }
            },
            {
              name: 'Bar1',
              data: [{
                x: 0.3,
                y: data[0]
              }],
              color: FIRST_COLOR,
              pointWidth: LINE_WIDTH,
              dataLabels: {
                enabled: true, 
                x: LABEL_PADDING,
                formatter: function() {
                  return data[0];
                }, 
                style: {
                        fontSize: '2em',
                        fontWeight: 'normal',
                        color: FIRST_COLOR
                }
              }              
            },
            {
              name: 'Bar2',
              data: [{
                x: 1,
                y: this.getMax(data)
              }],
              animation: false,
              color: ALPHA_SECOND_COLOR,
              pointWidth: LINE_WIDTH,
              dataLabels: {
                x: LABEL_PADDING,
                formatter: function(){
                  return data[1];
                },
                style: {
                        fontSize: '1.8em',
                        fontWeight: 'normal',
                        color: ORIGIN_SECOND_COLOR
                }
              }
            },
            {
              name: 'Bar3',
              data: [{
                x: 1,
                y: data[1]
              }],
              color: SECOND_COLOR,
              pointWidth: LINE_WIDTH,
              dataLabels: {enabled: false}
            }
          ],
          tooltip: {
            enabled: false
          }
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

    getMax(data) {
      var max = 0;
      var result = [];
      for (var i = 0; i < data.length; i++) 
        if (data[i] > max) 
          max = data[i];
      for (i = 0; i < data.length; i++) 
        result.push(max - data[i]);
      
      return max;
    }
}

export default Chart2;
