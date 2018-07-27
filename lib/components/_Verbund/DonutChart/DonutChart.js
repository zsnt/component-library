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
  const sx = index === 0 ? (cx + (outerRadius) * cos) : (cx + (innerRadius) * cos);
  const sy = index === 0 ? (cy + (outerRadius) * sin) : (cy + (innerRadius) * sin);
  const mx = index === 0 ? (cx + (outerRadius + 20) * cos) : (cx + (innerRadius - 50) * cos);
  const my = index === 0 ? (cy + (outerRadius + 20) * sin) : cy + (innerRadius - 50) * sin;
  const textAnchor = cos >= 0 ? 'start' : 'end';
  const textX = index === 0 ? (mx + 13 + (cos >= 0 ? 1 : -1) * 12) : (cx - 45);
  const textY = index === 0 ? (my - 3) : (cy + 13);

  return (
    <g>
      {both && <path d={`M${sx},${sy}L${mx},${my}`} stroke="#fff" fill="none" />}
      {(both || index !== 0) && <text x={textX} y={textY} textAnchor={textAnchor} fill="#fff" fontSize={index === 0 ? 18 : 44}>{value} %</text>}
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
            const baseWidth = width / 3;
            return (
              <PieChart width={width} height={width} onMouseEnter={this.onPieEnter.bind(this)}>
                <circle cx="50%" cy="50%" r={baseWidth + 5} fill="transparent" stroke="rgba(255, 255, 255, .15)" strokeWidth={20} />
                <circle cx="50%" cy="50%" r={baseWidth + 5} fill="transparent" stroke="white" strokeWidth={2.5} />
                <Pie
                  data={pieData}
                  innerRadius={baseWidth + 2}
                  outerRadius={baseWidth + 6}
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
              <div className="data-color">
                <div className="color" style={{
                  backgroundColor:
                    COLORS[index % COLORS.length] === 'transparent' ?
                      'white' : COLORS[index % COLORS.length]
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
