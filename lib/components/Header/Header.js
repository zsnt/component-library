import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
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

  const logo = (
    <div className="header-logo">
      <Link to={logoLink}>
        <img src={logoUrl} alt={logoAlt} />
      </Link>
    </div>
  );

  return (
    <header className={headerClasses} {...other}>
      {logo}
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
  logoAlt: '',
  logoLink: '/',
  children: undefined,
  className: '',
};

export default Header;
