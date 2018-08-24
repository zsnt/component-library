import React, { Component } from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IndicatorItem from './IndicatorItem';
import IconPlus from '../../images/icon_plus.svg';
require(`./ProgressIndicator.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

class ProgressIndicator extends Component {
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
      steps,
      ...other
    } = this.props;

    const menuClasses = classNames(
      'progressIndicator',
      className,
    );

    const stepItemList = steps.map((item, index) => (
      <IndicatorItem
        key={`step-${index}`}
        state= {item.state}
        title= {item.title}
        callback= {item.callback}
        iconUrl= {item.iconUrl}
        inactive={item.inactive}
      />
    ));

    return (
      <nav className={menuClasses}>
        {stepItemList}
      </nav>
    );
  }
}

ProgressIndicator.propTypes = {
  className: PropTypes.string,
  steps: PropTypes.arrayOf(PropTypes.shape({
    state: PropTypes.oneOf(['current', 'next', 'prev']),
    title: PropTypes.string.isRequired,
    callback: PropTypes.func.isRequired,
    iconUrl: PropTypes.string.isRequired,
    inactive: PropTypes.bool,
  })).isRequired,
};

ProgressIndicator.defaultProps = {
  className: '',
};

export default ProgressIndicator;
