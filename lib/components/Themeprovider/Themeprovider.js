import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';


const ThemeProvider = (props) => {
  const {
    theme,
    className,
    children,
    ...other
  } = props;

  const listClasses = classNames({
    [`theme-${theme}`]: true,
    className,
  });

  return (
    <div className={listClasses} {...other}>
      {children}
    </div>
  );
};

ThemeProvider.propTypes = {
  theme: PropTypes.string,
  children: PropTypes.node,
  className: PropTypes.string,
};

ThemeProvider.defaultProps = {
  theme: 'default',
  children: undefined,
  className: '',
};

export default ThemeProvider;
