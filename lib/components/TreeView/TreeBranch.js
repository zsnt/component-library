import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TreeBranch = (props) => {
  const {
    className,
    children,
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
};

TreeBranch.defaultProps = {
  className: '',
  children: undefined,
};

export default TreeBranch;
