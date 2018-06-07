import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TreeContent = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const treeClasses = classNames(
    'treeView__leaf__content',
    className,
  );

  return (
    <div className={treeClasses} {...other}>
      {children}
    </div>
  );
};

TreeContent.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TreeContent.defaultProps = {
  className: '',
  children: undefined,
};

export default TreeContent;
