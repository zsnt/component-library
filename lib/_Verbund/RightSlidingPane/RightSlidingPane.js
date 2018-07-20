import React, { Component } from 'react';
import PropTypes from 'prop-types';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

require(`./RightSlidingPane.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

class RightSlidingPane extends Component {
  state = {
    isSlidingPane: false,
  }

  render() {
    const { isSlidingPane } = this.state;
    const { children } = this.props;

    return (
      <div className={'RightSlidingPaneWrapper'}>
        {children}
        <SlidingPane
          className={'RightSlidingPane'}
          overlayClassName={'RightSlidingPaneOverlay'}
          width={384}
          isOpen={isSlidingPane}
        >
          <div>Hello</div>
        </SlidingPane>
      </div>
    );
  };
}

RightSlidingPane.propTypes = {
  type: PropTypes.oneOf(['loggedIn', 'loggedOut']),
};

RightSlidingPane.defaultProps = {
  type: 'loggedIn',
};

export default RightSlidingPane;
