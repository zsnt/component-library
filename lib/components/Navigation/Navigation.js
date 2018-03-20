import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './Navigation.scss';

const Navigation = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const navClasses = classNames(
    'nav',
    className,
  );

  return (
    <div className={navClasses} {...other}>
      {children}
    </div>
  );
};

Navigation.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Navigation.defaultProps = {
  children: undefined,
  className: '',
};

export default Navigation;
