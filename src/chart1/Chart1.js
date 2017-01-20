import React, {Component} from 'react';
import ReactHighcharts from 'react-highcharts';
import './Chart1.css';

class Chart1 extends Component {

  constructor(props) {
        super(props);

        var x_categories = [];
        for (var i = 1; i < 19; i++) {
          x_categories.push(i.toString());
        };

        var y_categories = ["-2", "", "Par", "", "+2"];
        var data = [];
        for (i = 0; i < 18; i ++) {
          data.push(0);
        }

        data[5] = -1;
        data[9] = 1;
        data[11] = -1;
        data[12] = -2;
        data[17] = 2;

        var result = this.sortData(data);

        var config = {
          title: {
            text: "Chart1"
          },
          plotOptions: {
              series: {
                  marker: {
                      radius: 8
                  }
              },
          },
          xAxis: {
            min:1,
            max: 17,
            tickInterval: 1,
            minPadding: 0,
            lineWidth: 0,
            minorGridLineWidth: 0,
            minorTickLength: 0,
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
            tickPositioner: function () {
                return [2, 1, 0, -1, -2];
            },
            labels: {
                    style: {
                        fontSize: '2.1em',
                        fontWeight: 'normal',
                    },
                    formatter: function() {
                        return y_categories[this.value + 2];
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

    sortData(originData) {
      if(originData === 'undefined') return [];

      var ZERO_COLOR = 'rgba(151,151,151,1)';
      var PLUS_COLOR = 'rgba(32,112,204,1)';
      var MINUS_COLOR = 'rgba(218,30,42,1)';
      var ALPHA_ZERO_COLOR = 'rgba(151,151,151,0.4)';
      var ALPHA_PLUS_COLOR = 'rgba(32,112,204,0.4)';
      var ALPHA_MINUS_COLOR = 'rgba(218,30,42,0.4)';

      var result = [];
      var index = 0;

      while(index < originData.length) {
         var obj = {
            name: 'Point',
            lineWidth:5,
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
              data.push([index, originData[index]]);
              index++;
            }
            obj.data = data;
            result.push(obj);
          } else {
            var flag = originData[index] > 0;
            flag ? obj.color = ALPHA_PLUS_COLOR : obj.color = ALPHA_MINUS_COLOR;
            flag ? obj.marker.fillColor = PLUS_COLOR : obj.marker.fillColor = MINUS_COLOR;
            data = [];
            if (index > 0) data.push([index-1, originData[index-1]]);
            while (index < originData.length && flag ? originData[index] > 0 : originData[index] < 0) {
              increaseFlag = false;
              data.push([index, originData[index]]);
              index++;
            }
            if (index < originData.length) data.push([index, originData[index]]);
            obj.data = data;
            result.push(obj);
          }
          if (increaseFlag)
            index++;
        }

        for(var i = result.length - 1; i >= 0; i --) {
          if (result[i].color === ALPHA_ZERO_COLOR) {
            index = result.length - 1;
            while (index > i) {
              if (result[index].color !== ALPHA_ZERO_COLOR) {
                obj = result[index];
                result[index] = result[i];
                result[i] = obj;
                break;
              }
              index--;
            }
          }
        }
        return result;
    }
}

export default Chart1;
