import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SVG from 'react-inlinesvg';

require(`./FormInput.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const FormInput = (props) => {
  const {
    label,
    disabled,
    onChange,
    type,
    className,
    icon,
  } = props;

  const classes = classNames(
    'form-input',
    `form-input--${type}`,
    className,
  );

  return (
    <div
      className={classes}
    >
      {icon &&
        <i className="input__icon"><SVG src={icon} /></i>
      }
      <input
        placeholder={label}
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};

FormInput.propTypes = {
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
  onChange: PropTypes.func,
  type: PropTypes.oneOf(['default', 'number']),
  icon: PropTypes.string,
  className: PropTypes.string,
};

FormInput.defaultProps = {
  type: 'primary',
  icon: undefined,
  disabled: false,
  onChange: () => { },
  className: '',
};

export default FormInput;
