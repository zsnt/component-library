import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const TreeTitle = (props) => {
  const {
    as,
    className,
    children,
    ...other
  } = props;

  const treeClasses = classNames(
    'treeView__title',
    className,
  );

  const ElementType = (as && as !== TreeTitle.defaultProps.as) ? as : TreeTitle.defaultProps.as;
  return (
    <ElementType className={treeClasses} {...other}>
      {children}
    </ElementType>
  );
};

TreeTitle.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

TreeTitle.defaultProps = {
  as: 'div',
  className: '',
  children: undefined,
};

export default TreeTitle;
