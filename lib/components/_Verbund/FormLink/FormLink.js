import React from 'react';
import PropTypes from 'prop-types';

require(`./FormLink.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const FormLink = (props) => {
  return (
    <div className={'form-link'}>
      <div>{props.label}</div>
    </div>
  );
};

FormLink.propTypes = {
  label: PropTypes.string.isRequired,
};

FormLink.defaultProps = {
  label: 'Passwort zurücksetzen',
};

export default FormLink;
