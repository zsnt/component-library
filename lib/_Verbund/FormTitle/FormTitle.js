import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import SVG from 'react-inlinesvg';
import IconClose from '../../images/icon_close_pane.svg';

require(`./FormTitle.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const FormTitle = (props) => {
  const {
    label,
    className,
    onClose
  } = props;

  const classes = classNames(
    'form-title',
    className,
  );

  return (
    <div className={classes}>
      {label}
      <i className="title__icon" onClick={onClose}><SVG src={IconClose} /></i>
    </div>
  );
};

FormTitle.propTypes = {
  label: PropTypes.string.isRequired,
  onClose: PropTypes.func
};

FormTitle.defaultProps = {
  label: 'Konto',
};

export default FormTitle;
