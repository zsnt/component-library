import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContainerDimensions from 'react-container-dimensions';
import { ComposedChart, XAxis, YAxis, Tooltip, Legend, CartesianGrid, CartesianAxis, Bar, Line, Label } from 'recharts';

require(`./BarLineChart.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Colors = {
  bar: `linear-gradient(-90deg, #B8E986 0%, #688649 100%)`,
  line: `linear-gradient(180deg, #00FFB9 0%, #0F7460 100%)`
}

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

const CustomTooltip = (props) => {
  const { active } = props;

  if (active) {
    const { payload, label } = props;
    return (
      <div className="custom-tooltip">
        <p className="label">{`${payload[0].payload.name} : ${payload[0].payload[payload[0].name]}`}</p>
      </div>
    );
  }

  return null;
};

class BarLineChart extends Component {
  render() {
    const {
      className,
      children,
      data,
      label,
      keys,
      showAllXAxis,
      long,
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
            const baseWidth = width / ((long || width > 1000) ? 4 : 2);
            const barSize = width / 70 > 10 ? 10 : width / 70;
            const verticalEnd = width - 20;
            return (
              <div>
                <ComposedChart
                  width={width - 20} height={baseWidth} data={data}
                  margin={{ top: 20 }}
                >
                  {
                    showAllXAxis &&
                    <XAxis
                      tick={{ stroke: 'white', fontSize: 10 }} opacity={0.3}
                      dataKey={'name'}
                    />
                  }
                  <YAxis
                    tick={{ stroke: 'white', fontSize: 10 }} opacity={0.3}
                    axisLine={true} tickLine={true} unit={keys.bar ? '%' : ''}
                    width={30}
                  />
                  <Tooltip content={<CustomTooltip />} cursor={{ strokeWidth: keys.bar ? 0 : 0, stroke: 'rgba(0, 0, 0, 0.1)' }} />
                  <CartesianGrid
                    stroke="#f5f5f5"
                    strokeWidth={0.5}
                    opacity={0.3}
                    verticalPoints={[0, verticalEnd]} />
                  {keys.bar && <Bar dataKey={keys.bar} barSize={barSize} fill="url(#linear-bar)" opacity={0.6} />}
                  {keys.line && <Line dataKey={keys.line}
                    stroke="url(#linear-line)"
                    dot={<CustomizedDot />}
                    strokeWidth={2}
                    activeDot={<CustomizedDot active />}
                    connectNulls={true}
                  />}
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
                <div className="Title"
                  style={{ width: height, bottom: height * 0.95 }}
                >
                  {label + (keys.bar ? ' (%)' : '')}
                </div>
              </div>
            )
          }}
        </ContainerDimensions>
        {
          !showAllXAxis &&
          <div className="xAxis">
            <div className="AxisLabel">{data[0].name}</div>
            <div className="AxisLabel">{data[data.length - 1].name}</div>
          </div>
        }
        <div className="Colors">
          {keys.bar &&
            <div className="Color Bar">
              <div className="Key">{capitalizeFirstLetter(keys.bar)}</div>
              <div className="Back" style={{ background: Colors.bar }}></div>
            </div>}
          {keys.line &&
            <div className="Color Line">
              <div className="Key">{capitalizeFirstLetter(keys.line)}</div>
              <div className="Back" style={{ background: Colors.line }}></div>
            </div>}
        </div>
      </div >
    );
  }
};

function capitalizeFirstLetter(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

BarLineChart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
  keys: PropTypes.shape({
    bar: PropTypes.string,
    line: PropTypes.string,
  }),
  label: PropTypes.string,
  showAllXAxis: PropTypes.bool,
  long: PropTypes.bool,
};

BarLineChart.defaultProps = {
  className: '',
  data: [
    { name: '01 Jan', volumen: 59, preis: 80 },
    { name: '02 Jan', volumen: 86, preis: 96 },
    { name: '03 Jan', volumen: 97, preis: 78 },
    { name: '04 Jan', volumen: 14, preis: 0 },
    { name: '05 Jan', volumen: 70, preis: 10 },
    { name: '06 Jan', volumen: 60, preis: 68 },
    { name: '07 Jan', volumen: 14, preis: 50 },
    { name: '08 Jan', volumen: 34, preis: 50 },
    { name: '09 Jan', volumen: 44, preis: 65 },
    { name: '10 Jan', volumen: 59, preis: 80 },
    { name: '11 Jan', volumen: 59, preis: 80 },
    { name: '12 Jan', volumen: 86, preis: 96 },
    { name: '13 Jan', volumen: 97, preis: 78 },
    { name: '14 Jan', volumen: 14, preis: 0 },
    { name: '15 Jan', volumen: 70, preis: 10 },
    { name: '16 Jan', volumen: 60, preis: 68 },
    { name: '17 Jan', volumen: 14, preis: 50 },
    { name: '18 Jan', volumen: 34, preis: 50 },
    { name: '19 Jan', volumen: 44, preis: 65 },
    { name: '20 Jan', volumen: 59, preis: 80 },
    { name: '21 Jan', volumen: 59, preis: 80 },
    { name: '22 Jan', volumen: 86, preis: 96 },
    { name: '23 Jan', volumen: 97, preis: 78 },
    { name: '24 Jan', volumen: 14, preis: 0 },
    { name: '25 Jan', volumen: 70, preis: 10 },
    { name: '26 Jan', volumen: 60, preis: 68 },
    { name: '27 Jan', volumen: 14, preis: 50 },
    { name: '28 Jan', volumen: 34, preis: 50 },
    { name: '29 Jan', volumen: 44, preis: 65 },
  ],
  keys: {
    bar: 'volumen',
    // line: 'preis',
  },
  label: 'Handelsvolumen',
  showAllXAxis: false,
  long: false,
};

export default BarLineChart;
