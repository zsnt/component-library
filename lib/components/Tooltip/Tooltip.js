import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

require(`./Tooltip.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Tooltip = (props) => {
  const {
    as,
    className,
    children,
    ...other
  } = props;

  const tooltipClasses = classNames(
    'tooltip',
    className,
  );

  const ElementType = (as && as !== Tooltip.defaultProps.as) ? as : Tooltip.defaultProps.as;

  return (
    <ElementType className={tooltipClasses} {...other}>
      {children}
    </ElementType>
  );
};

Tooltip.propTypes = {
  as: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Tooltip.defaultProps = {
  as: 'div',
  className: '',
  children: undefined,
};

export default Tooltip;
