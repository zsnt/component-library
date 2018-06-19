import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import SVG from 'react-inlinesvg';
import classNames from 'classnames/bind';

import IconLeftDoubleAngle from '../../images/icon_left_double_angle.svg';
import IconRightDoubleAngle from '../../images/icon_right_double_angle.svg';

require(`./StepButton.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const StepButton = (props) => {
  const {
    path,
    label,
    right,
    className,
    ...other
  } = props;

  const Icon = right ? IconRightDoubleAngle : IconLeftDoubleAngle;

  const buttonClasses = classNames(
    'stepButton',
    { 'stepButton--right': right },
    className,
  );

  return (
    <Link to={path} className={buttonClasses} {...other}>
      <SVG src={Icon} className="stepButton__icon" />
      <span className="stepButton__label">{label}</span>
    </Link>

  );
};

StepButton.propTypes = {
  path: PropTypes.string,
  label: PropTypes.string,
  right: PropTypes.bool,
  className: PropTypes.string,
};

StepButton.defaultProps = {
  path: '/',
  label: 'Back',
  right: false,
  className: '',
};

export default StepButton;
