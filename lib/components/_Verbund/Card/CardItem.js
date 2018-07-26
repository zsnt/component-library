

import React from 'react';
import PropTypes from 'prop-types';

import Headline from '../../Headline/Headline';
import PageCardBox from './CardBox';

require(`./Card.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const CardItem = (props) => {
  const {
    className,
    children,
    value,
    unit,
    ...other
  } = props;

  return (
    <PageCardBox {...other}>
      {children}
      <Headline type="card-text-large">
        {value}<div className="unit">{unit}</div>
      </Headline>
    </PageCardBox>
  );
};


CardItem.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  unit: PropTypes.string,
};

CardItem.defaultProps = {
  className: '',
  value: 0,
  unit: 'kWh',
};

export default CardItem;
