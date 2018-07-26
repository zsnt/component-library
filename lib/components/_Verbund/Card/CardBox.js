

import React from 'react';
import PropTypes from 'prop-types';

require(`./Card.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const CardBox = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  return (
    <div className={'page-card-box'} {...other}>
      {children}
    </div>
  );
};


CardBox.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardBox.defaultProps = {
  className: '',
};

export default CardBox;
