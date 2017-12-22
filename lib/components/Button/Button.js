import React from 'react';
import PropTypes from 'prop-types';

import './Button.scss';

const Button = ({ disabled, label, onClick }) => (
  <button className="button" disabled={disabled} onClick={onClick}>
    {label}
  </button>
);

Button.propTypes = {
  disabled: PropTypes.bool,
  label: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  };

Button.defaultProps = {
  disabled: false,
  onClick: () => {},
};

export default Button;
x
