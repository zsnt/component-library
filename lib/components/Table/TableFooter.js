import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TableFooter = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const tableHeadClasses = classNames(
    'tableFoot',
    className,
  );

  return (
    <tfoot className={tableHeadClasses} {...other}>
      {children}
    </tfoot>
  );
};


TableFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TableFooter.defaultProps = {
  children: undefined,
  className: '',
};

export default TableFooter;
