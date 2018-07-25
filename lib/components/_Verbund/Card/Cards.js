

import React from 'react';
import PropTypes from 'prop-types';

require(`./Card.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Cards = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  return (
    <div className={'page-cards'} {...other}>
      {children}
    </div>
  );
};


Cards.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Cards.defaultProps = {
  className: '',
};

export default Cards;
