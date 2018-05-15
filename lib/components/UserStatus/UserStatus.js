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
    'userStatus',
    className,
  );

  return (
    <div className={userStatusClasses} {...other}>
      {authenticated ? (
        <div className="userStatus__name">
          TODO: Username
        </div>
      ) : (
        <nav className="authNav">
          <ul className="authNav__list">
            <li>
              <Link to="/login" className="authNav__link">
                Login
              </Link>
            </li>
            <li>
              <Link to="/signup" className="authNav__link">
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
