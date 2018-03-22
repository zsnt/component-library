import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

require(`./Card.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Card = (props) => {
  const {
    as,
    className,
    children,
    ...other
  } = props;

  const cardClasses = classNames(
    'card',
    className,
  );

  const ElementType = (as && as !== Card.defaultProps.as) ? as : Card.defaultProps.as;

  return (
    <ElementType className={cardClasses} {...other}>
      {children}
    </ElementType>
  );
};

Card.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  as: 'div',
  className: '',
  children: undefined,
};

export default Card;
