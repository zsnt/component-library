import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

require(`./SellForm.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const InputGroup = (props) => {
  const {
    className,
    children,
    title,
    footer,
    ...other
  } = props;

  const inputGroupClasses = classNames(
    'input-group',
    className,
  );

  return (
    <div className={inputGroupClasses} {...other}>
      {title && <div className={'title'}>{title}</div>}
      <div className={'inputs'}>
        {children}
      </div>
      {footer && <div className={'footer-info'}>{footer}</div>}
    </div>
  );
};


InputGroup.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
  title: PropTypes.string,
  footer: PropTypes.string,
};

InputGroup.defaultProps = {
  className: '',
};

export default InputGroup;
