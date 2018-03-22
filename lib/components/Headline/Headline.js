import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

require(`./Headline.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Headline = (props) => {
  const {
    as,
    type,
    className,
    children,
    ...other
  } = props;

  const ElementType = (as && as !== Headline.defaultProps.as) ? as : Headline.defaultProps.as;

  const headlineClasses = classNames(
    'headline',
    className,
    {
      [`headline-${type}`]: true,
    },
  );

  return (
    <ElementType className={headlineClasses} {...other}>
      {children}
    </ElementType>
  );
};

Headline.propTypes = {
  as: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Headline.defaultProps = {
  as: 'div',
  type: 'headline',
  className: '',
  children: undefined,
};

export default Headline;
