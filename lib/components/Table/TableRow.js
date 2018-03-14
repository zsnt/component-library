import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TableRow = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const tableRowClasses = classNames(
    'tableRow',
    className,
  );

  return (
    <tr className={tableRowClasses} {...other}>
      {children}
    </tr>
  );
};


TableRow.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableRow.defaultProps = {
  children: undefined,
  className: '',
};

export default TableRow;
