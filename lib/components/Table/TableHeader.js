import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TableHeader = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const tableHeadClasses = classNames(
    'tableHead',
    className,
  );

  return (
    <thead className={tableHeadClasses} {...other}>
      {children}
    </thead>
  );
};


TableHeader.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableHeader.defaultProps = {
  children: undefined,
  className: '',
};

export default TableHeader;
