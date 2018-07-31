import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContainerDimensions from 'react-container-dimensions';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, Bar, Line } from 'recharts';

require(`./BarLineChart.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const CustomizedDot = (props) => {
  const { cx, cy, stroke, payload, value, active } = props;

  if (value <= 0) {
    return null;
  }

  return (
    <g>
      <circle cx={cx} cy={cy} r={7.5} fill="#00FFB9" opacity={0.3} />
      <circle cx={cx} cy={cy} r={active ? 3.5 : 2.5} fill="#00FFB9" />
    </g>
  );
};

class BarLineChart extends Component {
  render() {
    const {
      className,
      children,
      data,
      keys,
      ...other
    } = this.props;

    const donutChartClasses = classNames(
      'bar-line-chart',
      className,
    );

    return (
      <div className={donutChartClasses} {...other}>
        <ContainerDimensions>
          {({ width, height }) => {
            const baseWidth = width / 2;
            return (
              <ComposedChart width={width} height={baseWidth} data={data}>
                <XAxis dataKey="name"
                  tickLine={false}
                  interval={'preserveStartEnd'}
                />
                <YAxis
                  tick={{ stroke: 'white', fontSize: 10 }} opacity={0.5}
                  axisLine={true} tickLine={false} unit={'%'}
                  interval={'preserveStartEnd'}
                />
                <Tooltip />
                <Legend />
                <CartesianGrid stroke="#f5f5f5" vertical={false} opacity={0.5} />
                <Bar dataKey={keys.bar} barSize={6.8} fill="url(#linear-bar)" opacity={0.6} />
                <Line dataKey={keys.line}
                  stroke="url(#linear-line)"
                  dot={<CustomizedDot />}
                  line={{ stroke: 2 }}
                  activeDot={<CustomizedDot active />} />
                <defs>
                  <linearGradient id="linear-bar" x1="0%" y1="0%" x2="0" y2="100%">
                    <stop offset="0%" stopColor="#B8E986" />
                    <stop offset="100%" stopColor="#688649" />
                  </linearGradient>
                  <linearGradient id="linear-line" x1="0%" y1="0%" x2="0" y2="100%">
                    <stop offset="0%" stopColor="#00FFB9" />
                    <stop offset="100%" stopColor="#0F7460" />
                  </linearGradient>
                </defs>
              </ComposedChart>
            )
          }}
        </ContainerDimensions>
        <div className="colors">
          {
            ['Volumn', 'Presis'].map((item, index) => (
              item
            ))
          }
        </div>
      </div >
    );
  }
};


BarLineChart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  keys: PropTypes.shape({
    bar: PropTypes.string,
    line: PropTypes.string,
  })
};

BarLineChart.defaultProps = {
  className: '',
  data: [
    { name: 'Page A', volumen: 59, preis: 80 },
    { name: 'Page B', volumen: 86, preis: 96 },
    { name: 'Page C', volumen: 97, preis: 98 },
    { name: 'Page D', volumen: 14, preis: 20 },
    { name: 'Page E', volumen: 20, preis: 10 },
    { name: 'Page F', volumen: 60, preis: 68 },
  ],
  keys: {
    bar: 'volumen',
    line: 'preis',
  }
};

export default BarLineChart;
