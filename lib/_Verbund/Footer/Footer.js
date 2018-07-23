import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

require(`./Footer.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Footer = (props) => {
  const {
    type,
    className,
    children,
    ...other
  } = props;

  const footerClasses = classNames(
    'footer',
    `footer-${type}`,
    className,
  );

  return (
    <footer className={footerClasses} {...other}>
      {children}
    </footer>
  );
};


Footer.propTypes = {
  type: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

Footer.defaultProps = {
  type: 'footer',
  children: undefined,
  className: '',
};

export default Footer;
