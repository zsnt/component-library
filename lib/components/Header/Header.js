import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

require(`./Header.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Header = (props) => {
  const {
    logoUrl,
    logoAlt,
    logoLink,
    className,
    children,
    authenticated,
    ...other
  } = props;

  const headerClasses = classNames(
    'header',
    className,
  );

  const logo = (
    <div className="header-logo">
      <a href={logoLink}>
        <img src={logoUrl} alt={logoAlt} />
      </a>
    </div>
  );

  const userStatus = (
    <div className="user-status">
      {authenticated ? (
        <div className="user-status-name">
          TODO: Username
        </div>
      ) : (
        <nav className="header-nav">
          <ul className="header-nav-list">
            <li>
              <Link to="/login" className="header-nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="header-nav-link">
                Signup
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );

  return (
    <header className={headerClasses} {...other}>
      {logo}
      {userStatus}
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
  authenticated: PropTypes.bool,
};

Header.defaultProps = {
  children: undefined,
  className: '',
  authenticated: false,
};

export default Header;
