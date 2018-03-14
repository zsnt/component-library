import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import TableBody from './TableBody';
import TableCell from './TableCell';
import TableFooter from './TableFooter';
import TableHeader from './TableHeader';
import TableHeaderCell from './TableHeaderCell';
import TableRow from './TableRow';

require(`./Table.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Table = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const TableClasses = classNames(
    'table',
    className,
  );

  return (
    <table className={TableClasses} {...other}>
      {children}
    </table>
  );
};


Table.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Table.defaultProps = {
  children: undefined,
  className: '',
};

Table.Body = TableBody;
Table.Cell = TableCell;
Table.Footer = TableFooter;
Table.Header = TableHeader;
Table.HeaderCell = TableHeaderCell;
Table.Row = TableRow;

export default Table;
