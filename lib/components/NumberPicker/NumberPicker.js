import React from 'react';
import PropTypes from 'prop-types';

require('./NumberPicker.css');

const NumberPicker = ({ amount, label, onChange }) => {
  return (
    <div className="number-picker">
      <button
        type="button"
        className="number-picker__trigger"
      >
        &minus;
      </button>
      <div className="number-picker__amount-and-label">
        <input
          type="text"
          className="number-picker__amount"
          onChange={onChange}
          defaultValue={amount}
        />
        <div className="number-picker__label">
          {label}
        </div>
      </div>
      <button
        type="button"
        className="number-picker__trigger"
      >
        +
      </button>
    </div>
  );
};

NumberPicker.propTypes = {
  amount: PropTypes.string,
  label: PropTypes.string,
  onChange: PropTypes.func,
};

NumberPicker.defaultProps = {
  amount: '123,45 €',
  label: 'AmountLabel',
  onChange: () => {},
};

export default NumberPicker;
