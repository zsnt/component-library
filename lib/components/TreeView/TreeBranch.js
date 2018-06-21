import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

class TreeBranch extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  }

  render() {
    const {
      className,
      children,
      ...other
    } = this.props;

    const treeClasses = classNames(
      'treeView__branch',
      className,
    );

    return (
      <div className={treeClasses} {...other}>
        {children}
      </div>
    );
  }
}

TreeBranch.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TreeBranch.defaultProps = {
  className: '',
  children: undefined,
};

export default TreeBranch;
