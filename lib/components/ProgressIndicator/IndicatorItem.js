import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Diamond from '../Diamond/Diamond';


const IndicatorItem = (props) => {
    const {
      callback,
      className,
      title,
      state,
      inactive,
      iconUrl,
      ...other
    } = props;

    const itemClasses = classNames(
      'progressIndicator__item',
      `progressIndicator__item--${state}`,
      { 'progressIndicator__item--disabled': inactive },
      className,
    );
    return (
      <a onClick={callback} className={itemClasses}>
        <Diamond
          kind="small"
          type="indicator"
          iconUrl={iconUrl}
        />
      <span {...other} className="progressIndicator__title">{title}</span>
      </a>
    );
  };

IndicatorItem.propTypes = {
  state: PropTypes.oneOf(['current', 'next', 'prev']),
  title: PropTypes.string.isRequired,
  callback: PropTypes.func.isRequired,
  iconUrl: PropTypes.string.isRequired,
  inactive: PropTypes.bool,
  className: PropTypes.string,
};

IndicatorItem.defaultProps = {
  className: '',
  inactive: false,
};

export default IndicatorItem;
