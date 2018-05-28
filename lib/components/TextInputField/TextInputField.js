import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Label from '../Label/Label';

require(`./TextInputField.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const TextInputField = ({
  className,
  kind,
  htmlFor,
  label,
  placeholder,
  onChange,
  ...other
}) => {
  const textInputClasses = classNames(
    'textInput',
    `textInput--${kind}`,
    className,
  );

  const handleChange = (evt) => {
    onChange(evt);
  };

  return (
    <div className={textInputClasses}>
      <Label
        htmlFor={htmlFor}
        label={label}
      >
        <input
          type="text"
          className="textInput__input"
          id={htmlFor}
          placeholder={placeholder}
          onChange={handleChange}
          {...other}
        />
      </Label>
    </div>
  );
};

TextInputField.propTypes = {
  className: PropTypes.string,
  kind: PropTypes.oneOf(['small', 'medium']),
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

TextInputField.defaultProps = {
  className: '',
  kind: 'small',
  htmlFor: '',
  label: '',
  placeholder: '',
  onChange: () => {},
};

export default TextInputField;
