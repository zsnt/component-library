import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import CardListCard from '../Card/Card';


require(`./CardList.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const CardList = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const listClasses = classNames(
    'cardList',
    className,
  );

  return (
    <div className={listClasses} {...other}>
      {children}
    </div>
  );
};


CardList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

CardList.defaultProps = {
  children: undefined,
  className: '',
};

CardList.Card = CardListCard;

export default CardList;
