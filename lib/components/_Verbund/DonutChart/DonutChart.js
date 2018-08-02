import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ContainerDimensions from 'react-container-dimensions';
import { PieChart, Pie, Sector, Cell, LabelList } from 'recharts';

require(`./DonutChart.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const COLORS = ['transparent', '#50E3C2'];
const RADIAN = Math.PI / 180;

const renderCustomizedLabel = (both = true) => ({ cx, cy, midAngle, innerRadius, outerRadius, value, index }) => {
  const sin = Math.sin(-RADIAN * midAngle);
  const cos = Math.cos(-RADIAN * midAngle);
  const dSin = 1 - Math.sin(RADIAN * (450 - midAngle));
  const doubleSin = (dSin > 0.2 && dSin < 0.6) ? 0.7 : dSin;
  const sx = index === 0 ? (cx + (outerRadius) * cos) : (cx + (innerRadius) * cos);
  const sy = index === 0 ? (cy + (outerRadius) * sin) : (cy + (innerRadius) * sin);
  const fontSize = (index === 0 ? 18 : 32) * outerRadius / 80;
  const mx = index === 0 ? (cx - outerRadius * 0.95) : (cx + (innerRadius * 0.8 - doubleSin * innerRadius * 0.5) * cos);
  const my = index === 0 ? (cy - outerRadius * 0.95) : cy + (innerRadius * 0.8 - doubleSin * innerRadius * 0.5) * sin;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  const textX = index === 0 ? (mx - outerRadius * 0.1 + fontSize * 2.3) : (cx - fontSize * 1.7);
  const textY = index === 0 ? (my - outerRadius * 0.05 - fontSize * 0.5) : (cy + fontSize / 4);

  return (
    <g>
      {both && <path d={`M${sx},${sy}L${mx},${my}`} stroke="#fff" fill="none" />}
      {(both || index !== 0) && <text x={textX} y={textY} textAnchor={textAnchor} fill="#fff" fontSize={fontSize}>{value.toFixed(2)} %</text>}
    </g>
  );
};

class DonutChart extends Component {
  state = {
    activeIndex: 0,
  }

  onPieEnter(data, index) {
    this.setState({
      activeIndex: index,
    });
  }

  render() {
    const {
      className,
      children,
      data,
      ...other
    } = this.props;

    const donutChartClasses = classNames(
      'donut-chart',
      className,
    );
    const both = data.length > 1;
    const getData = (d) => {
      if (d.length > 1) return [d[1], d[0]];
      return [{ name: '', value: 100 - d[0].value }, d[0]];
    }
    const pieData = getData(data);

    return (
      <div className={donutChartClasses} {...other}>
        <ContainerDimensions>
          {({ width, height }) => {
            const w = width > 300 ? 300 : width;
            const baseWidth = w / 3;
            return (
              <PieChart width={w} height={w} onMouseEnter={this.onPieEnter.bind(this)}>
                <circle cx="50%" cy="50%" r={baseWidth * 1.06} fill="transparent" stroke="rgba(255, 255, 255, .15)" strokeWidth={baseWidth * 0.25} />
                <circle cx="50%" cy="50%" r={baseWidth * 1.06} fill="transparent" stroke="white" strokeWidth={baseWidth * 0.03} />
                <Pie
                  data={pieData}
                  innerRadius={baseWidth * 1.025}
                  outerRadius={baseWidth * 1.075}
                  paddingAngle={0}
                  label={renderCustomizedLabel(both)}
                  direction="ltr"
                  startAngle={90}
                  endAngle={450}
                  isAnimationActive={false}
                  dataKey={'value'}
                >
                  {
                    pieData.map((entry, index) => <Cell key={index} fill={COLORS[index % COLORS.length]} stroke={COLORS[index % COLORS.length]} />)
                  }
                </Pie>
              </PieChart>
            )
          }}
        </ContainerDimensions>
        <div className="colors">
          {
            [pieData[1], pieData[0]].map((item, index) => (
              item.name.length > 0 &&
              <div className="data-color" key={index}>
                <div className="color" style={{
                  backgroundColor:
                    COLORS[index % COLORS.length] === 'transparent' ?
                      (!both ? COLORS[1] : 'white') : COLORS[index % COLORS.length]
                }}></div>
                {item.name}
              </div>
            ))
          }
        </div>
      </div >
    );
  }
};


DonutChart.propTypes = {
  className: PropTypes.string,
  data: PropTypes.array,
};

DonutChart.defaultProps = {
  className: '',
  data: [
    { name: 'Lieferant', value: 75 },
    { name: 'Photovoltaik', value: 25 },
  ]
};

export default DonutChart;
