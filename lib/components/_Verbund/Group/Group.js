import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

require(`./Group.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Group = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const groupClasses = classNames(
    'group',
    className,
  );

  return (
    <div className={groupClasses} {...other}>
      {children}
    </div>
  );
};


Group.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Group.defaultProps = {
  children: undefined,
  className: '',
};

export default Group;
