import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

require(`./UserStatus.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const UserStatus = (props) => {
  const {
    authenticated,
    className,
    children,
    ...other
  } = props;

  const userStatusClasses = classNames(
    'user-status',
    className,
  );

  return (
    <div className={userStatusClasses} {...other}>
      {authenticated ? (
        <div className="user-status-name">
          TODO: Username
        </div>
      ) : (
        <nav className="auth-nav">
          <ul className="auth-nav-list">
            <li>
              <Link to="/login" className="auth-nav-link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="auth-nav-link">
                Signup
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </div>
  );
};


UserStatus.propTypes = {
  authenticated: PropTypes.bool,
  className: PropTypes.string,
  children: PropTypes.node,
};

UserStatus.defaultProps = {
  authenticated: false,
  className: '',
  children: undefined,
};

export default UserStatus;
