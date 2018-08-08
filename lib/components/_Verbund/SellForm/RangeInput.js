import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

require(`./SellForm.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

class RangeInput extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      value: props.value,
    }
  }

  onChange(step) {
    const { min, max } = this.props;
    const { value } = this.state;
    let val = value + step;
    val = Math.min(val, max);
    val = Math.max(val, min);
    this.setState({ value: val });
    if (this.props.onChange) this.props.onChange(value + step);
  }

  render() {
    const props = this.props;
    const {
      className,
      children,
      step,
      suffix,
      comma,
      info,
      ...other
    } = props;
    const { value } = this.state;

    const rangeInputClasses = classNames(
      'range-input',
      className,
    );

    function commafy(num) {
      var str = num.toString().split('.');
      if (str[0].length >= 4) {
        str[0] = str[0].replace(/(\d)(?=(\d{3})+$)/g, '$1,');
      }
      if (str[1] && str[1].length >= 5) {
        str[1] = str[1].replace(/(\d{3})/g, '$1 ');
      }
      return str.join('.');
    }

    const getOutput = (val) => {
      let ret = val;
      if (comma) ret = commafy(ret);
      if (suffix) ret += suffix;
      return ret;
    }

    return (
      <div className={rangeInputClasses} {...other}>
        <div className={'minus'} onClick={() => this.onChange(-step)}></div>
        <div className={'value'}>
          <div className={'output'}>
            {getOutput(value)}
          </div>
          {info && <div className={'info'}>{info}</div>}
        </div>
        <div className={'plus'} onClick={() => this.onChange(step)}></div>
      </div>
    );
  }
}

RangeInput.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  step: PropTypes.number,
  suffix: PropTypes.string,
  info: PropTypes.string,
  comma: PropTypes.bool,
};

RangeInput.defaultProps = {
  className: '',
  value: 24,
  min: Number.NEGATIVE_INFINITY,
  max: Number.POSITIVE_INFINITY,
  step: 1,
  suffix: '',
  comma: false,
};

export default RangeInput;
