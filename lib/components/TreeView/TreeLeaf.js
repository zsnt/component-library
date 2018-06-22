import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SVG from 'react-inlinesvg';

import Diamond from '../Diamond/Diamond';
import TreeTitle from './TreeTitle';
import TextInputField from '../TextInputField/TextInputField';
import NumberPicker from '../NumberPicker/NumberPicker';
import PopOutMenu from '../PopOutMenu/PopOutMenu';
import IconCross from '../../images/icon_cross.svg';

export default class TreeLeaf extends Component {
  constructor(props) {
    super(props);

    const {
      active,
      title,
    } = props;

    this.state = {
      active,
      title,
    };
  }

  setInactive = () => {
    this.setState({
      active: false,
    });
  }

  toggleActive = () => {
    this.setState({
      active: !this.state.active,
    });
  }

  handleClick = () => {
    this.toggleActive();

    if (this.props.refHook) {
      this.props.refHook.current.setInactive();
    }
  }

  handleTitleChange = (ev) => {
    const { target: { value } } = ev;

    this.setState({
      title: value,
    });

    this.props.onTitleChange(value);
  }

  render() {
    const {
      className,
      iconUrl,
      type,
      kind,
      numberPicker,
      children,
      popOutMenu,
      menuItems,
      onDelete,
      title,
      editable,
    } = this.props;

    const leafClasses = classNames(
      'treeView__leaf',
      className,
      { 'treeView__leaf--active': this.state.active },
    );

    const treeTitle = editable ? (
      <TextInputField
        name="title"
        value={this.state.title}
        onChange={e => this.handleTitleChange(e)}
        disabled={!this.state.active}
      />
    ) : (
      <span className="treeView__title__text">
        {title}
      </span>
    );
    const leafDiamond = popOutMenu ? (
      <PopOutMenu
        size={kind}
        menuItems={menuItems}
        active={this.state.active}
        onKeyPress={this.handleClick}
        onClick={this.handleClick}
        role="button"
        tabIndex={0}
      />
    ) : (
      <Diamond
        iconUrl={iconUrl}
        type={type}
        kind={kind}
        active={this.state.active}
        onKeyPress={this.handleClick}
        onClick={this.handleClick}
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
              title="remove node"
            >
              <SVG src={IconCross} />
            </div>
          }
          {leafDiamond}
          <TreeTitle>
            {treeTitle}
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
  editable: PropTypes.bool,
  active: PropTypes.bool,
  title: PropTypes.string,
  onTitleChange: PropTypes.func,
  refHook: PropTypes.shape({
    current: null,
  }),
};

TreeLeaf.defaultProps = {
  type: 'house',
  kind: 'medium',
  className: '',
  iconUrl: '',
  active: false,
  title: 'foobar',
  numberPicker: false,
  children: undefined,
  refHook: undefined,
  popOutMenu: false,
  menuItems: [],
  editable: true,
  onTitleChange: () => {},
  onDelete: () => {},
};
