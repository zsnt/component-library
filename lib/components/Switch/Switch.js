import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SVG from 'react-inlinesvg';
import Label from '../Label/Label';

import IconCheck from '../../images/icon_check.svg';

require(`./Switch.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

class Switch extends Component {
  constructor(props) {
    super(props);

    const { checked } = props;

    this.state = {
      checked,
    };
  }

  handleClick = (e) => {
    this.setState({
      checked: e.target.checked,
    });
  }

  render() {
    const {
      className,
      disabled,
      label,
      id,
      name,
      value,
      onChange,
      checked,
      ...other
    } = this.props;

    const switchClasses = classNames(
      'switch',
      className,
    );

    return (
      <Label
        className={switchClasses}
        htmlFor={id}
        label={label}
        {...other}
      >
        <input
          type="checkbox"
          className="switch__input"
          id={id}
          name={name}
          value={value}
          disabled={disabled}
          onChange={onChange}
          checked={this.state.checked}
          onClick={e => this.handleClick(e)}
          hidden
        />
        <span className="switch__slider" >
          <SVG src={IconCheck} className="switch__slider__icon" />
        </span>
      </Label>
    );
  }
}

Switch.propTypes = {
  value: PropTypes.string,
  id: PropTypes.string,
  className: PropTypes.string,
  name: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  checked: PropTypes.bool,
  label: PropTypes.string,
};

Switch.defaultProps = {
  id: 'switch',
  name: 'switch',
  value: 'switch',
  label: '',
  className: '',
  onChange: () => {},
  disabled: false,
  checked: false,
};

export default Switch;
