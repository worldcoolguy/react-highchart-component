import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import './Chart4.css';

class Chart4 extends Component {

  constructor(props) {
        super(props);

        var x_categories = [];
        for (var i = 1; i < 19; i++) {
          x_categories.push(i.toString());
        };

        var y_categories = ["E", "1UD", "2UD", "3UD"];
        var data = [];
        for (i = 0; i < 18; i ++) {
          data.push(0);
        }

        data[1] = 1;
        data[2] = 2;
        data[3] = 3;
        data[4] = 2;
        data[5] = 1;
        data[10] = 2;
        data[13] = 2;

        var result = this.sortData(data);

        var config = {
          chart: {
            type: 'column'
          },
          plotOptions: {
              series: {
                  borderRadius: 10,
                  pointWidth: 17,
              },
          },
          xAxis: {
            min:1,
            max: 17,
            tickInterval: 1,
            minPadding: 0,
            lineWidth: 0,
            minorGridLineWidth: 0,
            minorTickLength: 1,
            tickLength: 0,
            lineColor: 'transparent',          
            startOnTick: true,
            endOnTick: true,
            labels: {
              x: 0,
              y: 60,
              style: {
                        fontSize: '1.8em',
                        fontWeight: 'normal',
                        marginTop: '10px',
              }
            }
          },
          yAxis: {
            opposite: true,
            gridLineDashStyle: 'longdash',
            title: "",
            max: 3,
            min: 0,
            labels: {
                    style: {
                        fontSize: '2.1em',
                        fontWeight: 'normal',
                    },
                    formatter: function() {
                        return y_categories[this.value];
                    }
            }
          },
          series: result,
          credits: {
              enabled: false
          }
        };

        this.state = {
            config: config,
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

    sortData(originData) {
      if(originData === 'undefined') return [];

      var ZERO_COLOR = 'rgba(151,151,151,1)';
      var PLUS_COLOR = 'rgba(32,112,204,1)';
      var ALPHA_ZERO_COLOR = 'rgba(151,151,151,0.4)';

      var result = [];
      var index = 0;

      while(index < originData.length) {
         var obj = {
            name: 'Point',
            marker: {
              symbol: 'circle',
            }  
          }
          var increaseFlag = true;
          if (originData[index] === 0) {
            obj.color = ALPHA_ZERO_COLOR;
            obj.marker.fillColor = ZERO_COLOR;
            var data = [];
            while (index < originData.length && originData[index] === 0) {
              increaseFlag = false;
              data.push([index, 0.25]);
              index++;
            }
            obj.data = data;
            result.push(obj);
          } else {
            obj.color = PLUS_COLOR;
            obj.marker.fillColor = PLUS_COLOR;
            data = [];
            while (index < originData.length && originData[index] !== 0) {
              increaseFlag = false;
              data.push([index, originData[index]]);
              index++;
            }
            obj.data = data;
            result.push(obj);
          }
          if (increaseFlag)
            index++;
        }

        return result;
    }
}

export default Chart4;
