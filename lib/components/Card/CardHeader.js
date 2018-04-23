import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const CardHeader = (props) => {
  const {
    as,
    className,
    children,
    ...other
  } = props;

  const ElementType = (as && as !== CardHeader.defaultProps.as) ? as : CardHeader.defaultProps.as;

  const cardHeaderClasses = classNames(
    'card__header',
    className,
  );

  return (
    <ElementType className={cardHeaderClasses} {...other}>
      {children}
    </ElementType>
  );
};


CardHeader.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

CardHeader.defaultProps = {
  as: 'div',
  className: '',
  children: undefined,
};

export default CardHeader;
