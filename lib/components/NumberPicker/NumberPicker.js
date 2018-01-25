import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

require('./NumberPicker.css');

const formatValue = (value, currencySymbol) => {
  return currencySymbol ?
    `${value}${currencySymbol}` :
    value;
};

const NumberPicker = ({
  amount,
  label,
  onIncrement,
  onDecrement,
  onUpdateAmount,
  currencySymbol
}) => {
  return (
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
  );
};


NumberPicker.propTypes = {
  amount: PropTypes.number.isRequired,
  onIncrement: PropTypes.func.isRequired,
  onDecrement: PropTypes.func.isRequired,
  step: PropTypes.number,
  currencySymbol: PropTypes.string,
  label: PropTypes.string,
};

NumberPicker.defaultProps = {
  amount: 1,
  onIncrement: () => {},
  onDecrement: () => {},
  step: 1,
  currencySymbol: '',
  label: '',
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
