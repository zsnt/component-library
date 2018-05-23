import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import UserName from '../UserName/UserName';
import AuthNav from '../AuthNav/AuthNav';

require(`./UserStatus.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const UserStatus = (props) => {
  const {
    authenticated,
    username,
    handleLogout,
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
        <UserName
          username={username}
          onClick={handleLogout}
        />
      ) : (
        <AuthNav />
      )}
    </div>
  );
};

UserStatus.propTypes = {
  authenticated: PropTypes.bool,
  username: PropTypes.string,
  handleLogout: PropTypes.func,
  className: PropTypes.string,
  children: PropTypes.node,
};

UserStatus.defaultProps = {
  authenticated: false,
  username: '',
  handleLogout: null,
  className: '',
  children: undefined,
};

export default UserStatus;
