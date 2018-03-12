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

  const classes = classNames({
    button: true,
    secondary: type === 'secondary',
    [className]: className,
  });
  return (
    <button
      className={classes}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary']),
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
  disabled: false,
  onClick: () => {},
  className: '',
};

export default Button;
