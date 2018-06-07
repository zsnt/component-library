import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import TreeTitle from './TreeTitle';
import Diamond from '../Diamond/Diamond';
import NumberPicker from '../NumberPicker/NumberPicker';

export default class TreeLeaf extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false,
    };
    this.toggleActive = this.toggleActive.bind(this);
  }

  toggleActive() {
    this.setState({
      active: !this.state.active,
    });
    console.log(this.state.active);
  }

  render() {
    const {
      className,
      iconUrl,
      type,
      kind,
      title,
      numberPicker,
      children,
    } = this.props;

    const leafClasses = classNames(
      'treeView__leaf',
      className,
      { 'treeView__leaf--active': this.state.active },
    );

    return (
      <div
        className={leafClasses}
        onKeyPress={this.toggleActive}
        onClick={this.toggleActive}
        role="button"
        tabIndex={0}
      >
        <div className="treeView__leaf__content">
          <Diamond
            iconUrl={iconUrl}
            type={type}
            kind={kind}
            active={this.state.active}
          />
          <TreeTitle>
            {title}
          </TreeTitle>
          {numberPicker &&
            <NumberPicker
              defaultValue={1}
            />
          }
        </div>
        {children}
      </div>
    );
  }
}

TreeLeaf.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  kind: PropTypes.string,
  className: PropTypes.string,
  iconUrl: PropTypes.string,
  numberPicker: PropTypes.bool,
  children: PropTypes.node,
};

TreeLeaf.defaultProps = {
  type: 'house',
  kind: 'medium',
  className: '',
  iconUrl: '',
  title: 'foobar',
  numberPicker: false,
  children: undefined,
};
