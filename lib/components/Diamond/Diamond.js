import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

require(`./Diamond.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);
require('./icons.data.svg.css');

const Diamond = (props) => {
  const {
    active,
    kind,
    type,
    className,
    ...other
  } = props;

  const iconClasses = classNames(
    'diamond__icon',
    `icon-${type}`,
  );

  const diamondClasses = classNames(
    'diamond',
    `diamond__${kind}`,
    `diamond--${type}`,
    { 'diamond--active': active },
    className,
  );

  return (
    <div className={diamondClasses} {...other}>
      <span className={iconClasses} />
    </div>
  );
};

Diamond.propTypes = {
  active: PropTypes.bool,
  kind: PropTypes.oneOf(['anchor', 'action', 'device', 'entity']),
  type: PropTypes.string,
  className: PropTypes.string,
};

Diamond.defaultProps = {
  active: false,
  kind: 'entity',
  type: 'house',
  className: '',
};

export default Diamond;
