import React from 'react';
import PropTypes from 'prop-types';

require(`./Wrapper.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

const Wrapper = (props) => {
  const { children } = props;
  const childrenWithProps = React.Children.map(children, child => {
    if (child.props.type === 'verbund-primary') {
      return React.cloneElement(child, { onClick: props.onSliding || (() => { }) });
    }
    return child;
  });

  return (
    <div className={`verbund verbund-wrapper${props.layout ? '' : '-component'}`}>
      <div>
        {childrenWithProps}
      </div>
    </div>
  );
};

Wrapper.propTypes = {
  layout: PropTypes.bool.isRequired,
};

Wrapper.defaultProps = {
  layout: false,
}

export default Wrapper;
