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
  const {
    className,
    currencySymbol,
    label,
    inactive,
    kind,
    ...other
  } = props;

  const numberPickerClasses = classNames(
    'numberPicker',
    `numberPicker--${kind}`,
    { 'numberPicker--inactive': inactive },
    className,
  );
  return (
    <div className={numberPickerClasses}>
      <InputNumber
        {...other}
        formatter={value =>
          formatValue(value, currencySymbol)
        }
        className={classNames({ 'numberPicer--label': label })}
      />
      {
        label &&
        <div className="numberPicker_label">
          {label}
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
  kind: PropTypes.oneOf(['small', 'medium']),
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
  kind: 'small',
};

export default NumberPicker;
