import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

require(`./Section.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Section = (props) => {
  const {
    as,
    type,
    className,
    children,
    ...other
  } = props;

  const ElementType = (as && as !== Section.defaultProps.as) ? as : Section.defaultProps.as;

  const sectionClasses = classNames(
    'section',
    className,
    {
      [`section-${type}`]: true,
    },
  );

  return (
    <ElementType className={sectionClasses} {...other}>
      {children}
    </ElementType>
  );
};

Section.propTypes = {
  as: PropTypes.string,
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Section.defaultProps = {
  as: 'div',
  type: 'section',
  className: '',
  children: undefined,
};

export default Section;
