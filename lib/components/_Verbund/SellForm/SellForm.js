import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

require(`./SellForm.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const SellForm = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const sellFormClasses = classNames(
    'sell-form',
    className,
  );

  return (
    <div className={sellFormClasses} {...other}>
      {children}
    </div>
  );
};


SellForm.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

SellForm.defaultProps = {
  className: '',
};

export default SellForm;
