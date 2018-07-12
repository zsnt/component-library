import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Diamond from '../Diamond/Diamond';
import IconPlus from '../../images/icon_plus.svg';

require(`./PopOutMenu.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

class PopOutMenu extends Component {
  constructor(props) {
    super(props);

    this.state = {
      active: this.props.active,
    };
  }

  UNSAFE_componentWillReceiveProps(nextProps) {
    this.setState({
      active: nextProps.active,
    });
  }

  render() {
    const {
      size,
      className,
      menuItems,
      ...other
    } = this.props;

    const menuClasses = classNames(
      'popOutMenu',
      `popOutMenu--${size}`,
      { 'popOutMenu--active': this.state.active },
      className,
    );

    const menuItemList = menuItems.map((item, key) => (
      <li
        className="popOutMenu__item"
        key={`${item.type}-${key}`}
      >
        <Diamond
          kind={size}
          type={item.type}
          onClick={item.callback}
          iconUrl={item.iconUrl}
        />
      </li>
    ));

    return (
      <nav className={menuClasses}>
        <div className="popOutMenu__openBtn" >
          <Diamond
            kind={size}
            type="plus"
            active={this.state.active ? true : false}
            iconUrl={IconPlus}
            {...other}
          />
        </div>
        <ul className="popOutMenu__list">
          {menuItemList}
        </ul>
      </nav>
    );
  }
}

PopOutMenu.propTypes = {
  size: PropTypes.string,
  className: PropTypes.string,
  menuItems: PropTypes.arrayOf(PropTypes.shape({
    callback: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    iconUrl: PropTypes.string.isRequired,
  })).isRequired,
  active: PropTypes.bool,
};

PopOutMenu.defaultProps = {
  size: 'medium',
  className: '',
  active: false,
};

export default PopOutMenu;
