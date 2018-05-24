import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Label from '../Label/Label';

require(`./TextInputField.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const TextInputField = ({
  className,
  htmlFor,
  label,
  placeholder,
  onChange,
  ...other
}) => {
  const textInputClasses = classNames(
    'textInput',
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
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
};

TextInputField.defaultProps = {
  className: '',
  htmlFor: '',
  label: '',
  placeholder: '',
  onChange: () => {},
};

export default TextInputField;
