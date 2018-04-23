import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const CardFooter = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const footerClasses = classNames(
    'card__footer',
    className,
  );
  return (
    <div className={footerClasses} {...other} >
      {children}
    </div>
  );
};


CardFooter.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardFooter.defaultProps = {
  className: '',
  children: undefined,
};

export default CardFooter;
