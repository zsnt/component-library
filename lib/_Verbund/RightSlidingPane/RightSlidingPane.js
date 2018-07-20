import React, { Component } from 'react';
import SlidingPane from 'react-sliding-pane';
import 'react-sliding-pane/dist/react-sliding-pane.css';

require(`./RightSlidingPane.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

class RightSlidingPane extends Component {
  state = {
    isOpen: false,
  }

  render() {
    const { isOpen } = this.state;
    const { children } = this.props;

    return (
      <div className={'RightSlidingPaneWrapper'}>
        {children}
        <SlidingPane
          className={'RightSlidingPane'}
          overlayClassName={'RightSlidingPaneOverlay'}
          width={384}
          isOpen={isOpen}
        >
          <div>Hello</div>
        </SlidingPane>
      </div>
    );
  };
}

export default RightSlidingPane;
