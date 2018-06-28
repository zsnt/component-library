import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TreeBranch = (props) => {
  const {
    className,
    children,
    active,
    setInactive,
    ...other
  } = props;

  const treeClasses = classNames(
    'treeView__branch',
    className,
  );

  return (
    <div className={treeClasses} {...other}>
      {children}
    </div>
  );
};

TreeBranch.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  active: PropTypes.bool,
  setInactive: PropTypes.func,
};

TreeBranch.defaultProps = {
  className: '',
  children: undefined,
  active: false,
  setInactive: () => {},
};

export default TreeBranch;
