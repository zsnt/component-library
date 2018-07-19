import React from 'react';
import PropTypes from 'prop-types';

require(`./Wrapper.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Wrapper = (props) => {
  return (
    <div className={`verbund verbund-wrapper${props.layout ? '' : '-component'}`}>
      <div>
        {props.children}
      </div>
    </div>
  );
};

Wrapper.propTypes = {
  component: PropTypes.bool,
};

export default Wrapper;
