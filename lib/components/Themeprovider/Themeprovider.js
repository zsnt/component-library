import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';


const ThemeProvider = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const listClasses = classNames(className);

  return (
    <div className={listClasses} {...other}>
      {children}
    </div>
  );
};

ThemeProvider.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string,
};

ThemeProvider.defaultProps = {
  children: undefined,
  className: '',
};

export default ThemeProvider;
