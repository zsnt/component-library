import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import IndexElement from './IndexElement';

require(`./IndexList.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const IndexList = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const indexListClasses = classNames(
    'indexList',
    className,
  );

  return (
    <div className={indexListClasses} {...other}>
      {children}
    </div>
  );
};


IndexList.propTypes = {
  className: PropTypes.string,
  children: PropTypes.string,
};

IndexList.defaultProps = {
  className: '',
  children: undefined,
};

IndexList.Element = IndexElement;

export default IndexList;
