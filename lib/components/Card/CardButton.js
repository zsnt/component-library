import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import Button from '../Button/Button';


const CardButton = (props) => {
  const {
    className,
    ...other
  } = props;

  const buttonClasses = classNames(
    'card__button',
    className,
  );

  return (
    <Button className={buttonClasses} {...other} />
  );
};


CardButton.propTypes = {
  className: PropTypes.string,
};

CardButton.defaultProps = {
  className: '',
};

export default CardButton;
