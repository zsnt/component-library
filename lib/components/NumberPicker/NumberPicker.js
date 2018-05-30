import React from 'react';
import PropTypes from 'prop-types';
import InputNumber from 'rc-input-number';
import classNames from 'classnames';

require(`./NumberPicker.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const formatValue = (value, currencySymbol) => {
  if (currencySymbol) {
    const newVal = value.replace(/\./, () => ',');
    return `${newVal} ${currencySymbol}`;
  }
  return value;
};

const NumberPicker = (props) => {
  const numberPickerClasses = classNames(
    'numberPicker',
    props.className,
    { 'numberPicker--inactive': props.inactive },
  );
  return (
    <div className={numberPickerClasses}>
      <InputNumber
        {...props}
        formatter={value =>
          formatValue(value, props.currencySymbol)
        }
        className={classNames({ 'numberPicer--label': props.label })}
      />
      {
        props.label &&
        <div className="numberPicker_label">
          {props.label}
        </div>
      }
    </div>
  );
};


NumberPicker.propTypes = {
  className: PropTypes.string,
  inactive: PropTypes.bool,
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
  className: '',
  step: 1,
  currencySymbol: '',
  label: '',
  min: 0,
  max: 100,
  precision: 0,
  defaultValue: 0,
  disabled: false,
  inactive: false,
};

export default NumberPicker;
