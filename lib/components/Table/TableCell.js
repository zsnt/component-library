import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TableCell = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const tableCellClasses = classNames(
    'tableCell',
    className,
  );

  return (
    <td className={tableCellClasses} {...other}>
      {children}
    </td>
  );
};


TableCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableCell.defaultProps = {
  children: undefined,
  className: '',
};

export default TableCell;
