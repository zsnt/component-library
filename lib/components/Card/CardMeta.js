import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

const CardMeta = (props) => {
  const {
    as,
    className,
    children,
    ...other
  } = props;

  const ElementType = (as && as !== CardMeta.defaultProps.as) ? as : CardMeta.defaultProps.as;

  const cardMetaClasses = classNames(
    'card__meta',
    className,
  );

  return (
    <ElementType className={cardMetaClasses} {...other}>
      {children}
    </ElementType>
  );
};


CardMeta.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

CardMeta.defaultProps = {
  as: 'div',
  className: '',
  children: undefined,
};

export default CardMeta;
