import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import ListElement from './ListElement';

require(`./List.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const List = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const listClasses = classNames(
    'list',
    className,
  );

  return (
    <ul className={listClasses} {...other}>
      {children}
    </ul>
  );
};


List.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

List.defaultProps = {
  className: '',
  children: undefined,
};

List.Element = ListElement;

export default List;
