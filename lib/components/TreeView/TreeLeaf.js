import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SVG from 'react-inlinesvg';

import TreeTitle from './TreeTitle';
import Diamond from '../Diamond/Diamond';
import NumberPicker from '../NumberPicker/NumberPicker';
import PopOutMenu from '../PopOutMenu/PopOutMenu';
import IconCross from '../../images/icon_cross.svg';

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
      popOutMenu,
      menuItems,
      onDelete,
    } = this.props;

    const leafClasses = classNames(
      'treeView__leaf',
      className,
      { 'treeView__leaf--active': this.state.active },
    );

    const leafDiamond = popOutMenu ? (
      <PopOutMenu
        size={kind}
        menuItems={menuItems}
        active={this.state.active}
        onKeyPress={this.toggleActive}
        onClick={this.toggleActive}
        role="button"
        tabIndex={0}
      />
    ) : (
      <Diamond
        iconUrl={iconUrl}
        type={type}
        kind={kind}
        active={this.state.active}
        onKeyPress={this.toggleActive}
        onClick={this.toggleActive}
        role="button"
        tabIndex={0}
      />
    );

    return (
      <div className={leafClasses}>
        <div className="treeView__leaf__content">
          {this.state.active &&
            <div
              className="treeView__leaf__delete"
              onKeyPress={onDelete}
              onClick={onDelete}
              role="button"
              tabIndex={0}
            >
              <SVG src={IconCross} />
            </div>
          }
          {leafDiamond}
          <TreeTitle>
            {title}
          </TreeTitle>
          {numberPicker &&
            <NumberPicker
              defaultValue={1}
              inactive={!this.state.active}
              disabled={!this.state.active}
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
  popOutMenu: PropTypes.bool,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    callback: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired,
  })),
  onDelete: PropTypes.func,
};

TreeLeaf.defaultProps = {
  type: 'house',
  kind: 'medium',
  className: '',
  iconUrl: '',
  title: 'foobar',
  numberPicker: false,
  children: undefined,
  popOutMenu: false,
  menuItems: [],
  onDelete: () => {},
};
