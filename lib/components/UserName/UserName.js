import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SVG from 'react-inlinesvg';

import IconUser from './../../images/icon_user.svg';

require(`./UserName.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const UserName = (props) => {
  const {
    username,
    onClick,
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
        <SVG src={IconUser} alt="Icon User" />
      </span>
      <span className="userName__name">
        {username}
      </span>
      <a
        href="#"
        className="userName__logout"
        onClick={onClick}
      >
        (Logout)
      </a>
    </div>
  );
};

UserName.propTypes = {
  username: PropTypes.string,
  onClick: PropTypes.func.isRequired,
  className: PropTypes.string,
  children: PropTypes.node,
};

UserName.defaultProps = {
  username: '',
  className: '',
  children: undefined,
};

export default UserName;
