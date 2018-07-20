import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import SVG from 'react-inlinesvg';

require(`./Button.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Button = (props) => {
  const {
    label,
    disabled,
    onClick,
    type,
    className,
    icon,
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
      {icon &&
        <i className="button__icon"><SVG src={icon} /></i>
      }
      <span className="button__label"> {label} </span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['primary', 'secondary', 'cta', 'icon', 'verbund-primary']),
  icon: PropTypes.string,
  className: PropTypes.string,
};

Button.defaultProps = {
  type: 'primary',
  icon: undefined,
  disabled: false,
  onClick: () => {},
  className: '',
};

export default Button;
