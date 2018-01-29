import React from 'react';
import PropTypes from 'prop-types';

require(`./Button.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

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
