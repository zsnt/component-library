

import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import Icons from './Icons';

require(`./Icon.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Icon = (props) => {
  const {
    icon,
    className,
    ...other
  } = props;

  return (
    <div className={'icon'} {...other}>
      {
        Icons[icon] ?
          <img src={Icons[icon]} alt={icon} />
          :
          icon
      }
    </div>
  );
};


Icon.propTypes = {
  icon: PropTypes.string.isRequired,
  className: PropTypes.string,
};

Icon.defaultProps = {
  className: '',
};

export default Icon;
