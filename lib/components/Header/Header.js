import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

require(`./Header.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Header = (props) => {
  const {
    logoUrl,
    logoAlt,
    logoLink,
    className,
    children,
    ...other
  } = props;

  const headerClasses = classNames(
    'header',
    className,
  );

  const logo = <a href={logoLink}> <img src={logoUrl} alt={logoAlt} /></a>;

  return (
    <header className={headerClasses} {...other}>
      <div className="header-logo">
        {logo}
      </div>
      {children}
    </header>
  );
};


Header.propTypes = {
  logoUrl: PropTypes.string.isRequired,
  logoAlt: PropTypes.string.isRequired,
  logoLink: PropTypes.string.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

Header.defaultProps = {
  children: undefined,
  className: '',
};

export default Header;
