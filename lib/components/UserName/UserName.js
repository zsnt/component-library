import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IconUser from './../../images/icon_user.svg';

require(`./UserName.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const UserName = (props) => {
  const {
    username,
    className,
    children,
    ...other
  } = props;

  const userNameClasses = classNames(
    'userName',
    className,
  );

  return (
    <div className={userNameClasses} {...other}>
      <span className="userName__icon">
        <img src={IconUser} alt="Icon User" />
      </span>
      {username}
    </div>
  );
};

UserName.propTypes = {
  username: PropTypes.string,
  className: PropTypes.string,
  children: PropTypes.node,
};

UserName.defaultProps = {
  username: '',
  className: '',
  children: undefined,
};

export default UserName;
