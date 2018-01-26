import React from 'react';
import PropTypes from 'prop-types';
import InputNumber from 'rc-input-number';
import classNames from 'classnames';
import './NumberPicker.css';

const formatValue = (value, currencySymbol) => {
  return currencySymbol ?
    `${value} ${currencySymbol}` :
    value;
};

const NumberPicker = ({
  label,
  currencySymbol,
  min,
  max,
  step,
  precision,
  defaultValue,
}) => {
  return (
    <div className="number-picker-wrapper">
      <InputNumber
        min={min}
        max={max}
        step={step}
        precision={precision}
        defaultValue={defaultValue}
        formatter={(value) => formatValue(value, currencySymbol)}
        className={classNames({'has-input-label': label})}
      />
      {
        label &&
        <div className="number-picker-label">
          {label}
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
};

NumberPicker.defaultProps = {
  step: 1,
  currencySymbol: '',
  label: '',
  min: 0,
  max: 100,
  precision: 0,
  defaultValue: 1,
};

export default NumberPicker;
