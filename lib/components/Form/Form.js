import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';

import FormElement from './FormElement';

require(`./Form.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Form = (props) => {
  const {
    className,
    children,
    ...other
  } = props;

  const formClasses = classNames(
    'form',
    className,
  );

  return (
    <form className={formClasses} {...other}>
      {children}
    </form>
  );
};


Form.propTypes = {
  className: PropTypes.string,
  children: PropTypes.node,
};

Form.defaultProps = {
  className: '',
  children: 'undefined',
};

Form.Element = FormElement;

export default Form;
