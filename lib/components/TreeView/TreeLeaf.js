import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TreeLeaf = (props) => {
  const {
    active,
    className,
    children,
    ...other
  } = props;

  const treeClasses = classNames(
    'treeView__leaf',
    className,
    { 'treeView__leaf--active': active },
  );

  return (
    <div className={treeClasses} {...other}>
      {children}
    </div>
  );
};

TreeLeaf.propTypes = {
  active: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

TreeLeaf.defaultProps = {
  active: false,
  className: '',
  children: undefined,
};

export default TreeLeaf;
