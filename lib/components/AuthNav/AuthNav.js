import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import { Link } from 'react-router-dom';

require(`./AuthNav.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const AuthNav = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const authNavClasses = classNames(
    'authNav',
    className,
  );

  return (
    <nav className={authNavClasses} {...other}>
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
  );
};

AuthNav.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

AuthNav.defaultProps = {
  className: '',
  children: undefined,
};

export default AuthNav;
