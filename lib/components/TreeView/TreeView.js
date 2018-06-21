import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import TreeBranch from './TreeBranch';
import TreeLeaf from './TreeLeaf';

require(`./TreeView.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

class TreeView extends Component {
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
      'treeView',
      className,
    );

    return (
      <div className={treeClasses} {...other}>
        {children}
      </div>
    );
  }
}

TreeView.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

TreeView.defaultProps = {
  className: '',
  children: undefined,
};

TreeView.Branch = TreeBranch;
TreeView.Leaf = TreeLeaf;

export default TreeView;
