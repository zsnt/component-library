import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ReactSlider from 'react-slider';

require(`./SellForm.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: props.value,
    }

    this.onChange = this.onChange.bind(this);
  }

  onChange(val) {
    this.setState({ value: val })
    if (this.props.onChange) this.props.onChange(val);
  }

  render() {
    const props = this.props;
    const {
      className,
      children,
      min, max, onChange, tickStep, unit,
      ...other
    } = props;
    const { value } = this.state;

    const sliderClasses = classNames(
      'slider-input',
      className,
    );

    const range = max - min;
    const ticks = new Array(parseInt(range / tickStep) + 1).fill(0);
    ticks[0] = 1;

    return (
      <div className={sliderClasses} {...other}>
        <div className={'ticks'}>
          {
            ticks.map((t, index) => (
              <div className={'tick'} key={index} style={{ width: `${t === 1 ? 0 : 100 / (ticks.length - 1)}%` }}></div>
            ))
          }
        </div>
        <div className={'marks'}>
          {value > min + tickStep && <div className={'min'}>{min}{unit}</div>}
          {value < max - tickStep && <div className={'max'}>{max}{unit}</div>}
          <div className={'value'}
            style={{
              left: `calc(${(value - min) / range * 100}% - 25px - ${(value - range / 2) / range * 30}px)`
            }}>
            {value}{unit}
          </div>
        </div>
        <ReactSlider value={value} min={min} max={max} onChange={this.onChange} />
      </div >
    );
  }
}


Slider.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  min: PropTypes.number,
  max: PropTypes.number,
  tickStep: PropTypes.number,
  unit: PropTypes.string,
  value: PropTypes.number,
  onChange: PropTypes.func,
};

Slider.defaultProps = {
  className: '',
  min: 0,
  max: 100,
  tickStep: 10,
  unit: '%',
  value: 60,
  onChange: () => { }
};

export default Slider;
