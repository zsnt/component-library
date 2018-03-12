import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import './Layout.scss';

const Layout = (props) => {
  const {
    layout,
    className,
    children,
    ...other
  } = props;

  const layoutClasses = classNames({
    layout,
    className,
  });

  return (
    <div className={layoutClasses} {...other}>
      {children}
    </div>
  );
};


Layout.propTypes = {
  layout: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

Layout.defaultProps = {
  children: undefined,
  className: '',
};

export default Layout;
