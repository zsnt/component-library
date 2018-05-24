import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

require(`./Label.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Label = ({
  className,
  htmlFor,
  label,
  children,
  ...other
}) => {
  const labelClasses = classNames(
    'label',
    className,
  );

  return (
    <label
      htmlFor={htmlFor}
      className={labelClasses}
      {...other}
    >
      <span className="label__text">
        {label}
      </span>

      {children}
    </label>
  );
};

Label.propTypes = {
  className: PropTypes.string,
  htmlFor: PropTypes.string,
  label: PropTypes.string,
  children: PropTypes.node,
};

Label.defaultProps = {
  className: '',
  htmlFor: '',
  label: '',
  children: undefined,
};

export default Label;
