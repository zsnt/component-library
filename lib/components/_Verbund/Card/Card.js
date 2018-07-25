

import React from 'react';
import PropTypes from 'prop-types';

require(`./Card.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Card = (props) => {
  const {
    width,
    className,
    children,
    ...other
  } = props;

  return (
    <div className={'page-card'} {...other} style={{width: `${width}%`}}>
      {children}
    </div>
  );
};


Card.propTypes = {
  width: PropTypes.number,
  className: PropTypes.string,
  children: PropTypes.node,
};

Card.defaultProps = {
  width: 50,
  className: '',
};

export default Card;
