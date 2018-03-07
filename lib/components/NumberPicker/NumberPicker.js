import React from 'react';
import PropTypes from 'prop-types';
import InputNumber from 'rc-input-number';
import classNames from 'classnames';

require(`./NumberPicker.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const formatValue = (value, currencySymbol) => {
  if (currencySymbol) {
    const newVal = value.replace(/\./, (match) => ',');
    return `${newVal} ${currencySymbol}`;
  }
  return value;
};

const NumberPicker = (props) => {
  return (
    <div className="number-picker-wrapper">
      <InputNumber
        {...props}
        formatter={(value) =>
          formatValue(value, props.currencySymbol)
        }
        className={classNames({'has-input-label': props.label})}
      />
      {
        props.label &&
        <div className="number-picker-label">
          {props.label}
        </div>
      }
    </div>
  );
};


NumberPicker.propTypes = {
  step: PropTypes.number,
  currencySymbol: PropTypes.string,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  precision: PropTypes.number,
  defaultValue: PropTypes.number,
  disabled: PropTypes.bool,
};

NumberPicker.defaultProps = {
  step: 1,
  currencySymbol: '',
  label: '',
  min: 0,
  max: 100,
  precision: 0,
  defaultValue: 0,
  disabled: false
};

export default NumberPicker;
