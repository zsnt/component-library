import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TableHeaderCell = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const tableHeaderCellClasses = classNames(
    'tableHeaderCell',
    className,
  );

  return (
    <th className={tableHeaderCellClasses} {...other}>
      {children}
    </th>
  );
};


TableHeaderCell.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableHeaderCell.defaultProps = {
  children: undefined,
  className: '',
};

export default TableHeaderCell;
