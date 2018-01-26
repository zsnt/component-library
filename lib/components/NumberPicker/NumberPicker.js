import React, { Component } from 'react';
import PropTypes from 'prop-types';
import InputNumber from 'rc-input-number';
import { connect } from 'react-redux';
import classNames from 'classnames';
import './NumberPicker.css';

const formatValue = (value, currencySymbol) => {
  return currencySymbol ?
    `${value} ${currencySymbol}` :
    value;
};

const NumberPicker = ({
  amount,
  label,
  onIncrement,
  onDecrement,
  onUpdateAmount,
  currencySymbol,
  min,
  max,
  step,
  precision,
  defaultValue,
}) => {
  return (
    <div>
      <div className="number-picker-wrapper">
        <div className="number-picker">
          <button
            type="button"
            className="number-picker__trigger"
            onClick={onDecrement}
          >
            &minus;
          </button>
          <div className="number-picker__amount-and-label">
            <input
              type="text"
              className="number-picker__amount"
              onChange={(ev) => {
                onUpdateAmount(parseInt(ev.target.value));
              }}
              value={
                formatValue(amount, currencySymbol)
              }
            />
            {
              label &&
              <div className="number-picker__label">
                {label}
              </div>
            }
          </div>
          <button
            type="button"
            className="number-picker__trigger"
            onClick={onIncrement}
          >
            +
          </button>
        </div>
      </div>

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
          <div className="number-picker__label rc-input-number__label">
            {label}
          </div>
        }
      </div>
    </div>
  );
};


NumberPicker.propTypes = {
  amount: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  step: PropTypes.number,
  currencySymbol: PropTypes.string,
  label: PropTypes.string,
  min: PropTypes.number,
  max: PropTypes.number,
  precision: PropTypes.number,
  defaultValue: PropTypes.number,
};

NumberPicker.defaultProps = {
  amount: 1,
  onIncrement: () => {},
  onDecrement: () => {},
  step: 1,
  currencySymbol: '',
  label: '',
  min: 0,
  max: 100,
  precision: 0,
  defaultValue: 1,
};


const increment = (step) => {
  return {
    type: 'INCREMENT',
    step
  };
};

const decrement = (step) => {
  return {
    type: 'DECREMENT',
    step
  };
};

const updateAmount = (value) => {
  return {
    type: 'UPDATE_AMOUNT',
    value
  }
};

const mapStateToProps = (state) => {
  return {
    amount: state.amount
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onIncrement: () => {
      dispatch(increment(ownProps.step));
    },
    onDecrement: () => {
      dispatch(decrement(ownProps.step));
    },
    onUpdateAmount: (val) => {
      dispatch(updateAmount(val));
    }
  }
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberPicker);
