import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TableBody = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const tableBodyClasses = classNames(
    'tableBody',
    className,
  );

  return (
    <tbody className={tableBodyClasses} {...other}>
      {children}
    </tbody>
  );
};


TableBody.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableBody.defaultProps = {
  children: undefined,
  className: '',
};

export default TableBody;
