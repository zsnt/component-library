import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const ListElement = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const listClasses = classNames(
    'listElement',
    className,
  );

  return (
    <li className={listClasses} {...other}>
      {children}
    </li>
  );
};


ListElement.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

ListElement.defaultProps = {
  className: '',
  children: undefined,
};

export default ListElement;
