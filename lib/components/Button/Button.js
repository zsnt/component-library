import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

require(`./Button.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Button = (props) => {
  const {
    label,
    disabled,
    onClick,
    type,
    className,
  } = props;

  const classes = classNames(
    'button',
    `button--${type}`,
    className,
  );
  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      <span className="button__label"> {label} </span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary', 'cta']),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
  disabled: false,
  onClick: () => {},
  className: '',
};

export default Button;
