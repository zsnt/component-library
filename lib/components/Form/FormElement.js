import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const FormElement = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const formElementClasses = classNames(
    'form__element',
    className,
  );

  return (
    <div className={formElementClasses} {...other}>
      {children}
    </div>
  );
};


FormElement.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

FormElement.defaultProps = {
  className: '',
  children: 'undefined',
};

export default FormElement;
