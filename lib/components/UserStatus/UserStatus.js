import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import AuthNav from '../AuthNav/AuthNav';
import IconUser from './../../images/icon_user.svg';

require(`./UserStatus.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const UserStatus = (props) => {
  const {
    authenticated,
    username,
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
          <span className="userStatus__icon">
            <img src={IconUser} alt="Icon User" />
          </span>
          {username}
        </div>
      ) : (
        <AuthNav />
      )}
    </div>
  );
};

UserStatus.propTypes = {
  authenticated: PropTypes.bool,
  username: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

UserStatus.defaultProps = {
  authenticated: false,
  username: '',
  className: '',
  children: undefined,
};

export default UserStatus;
