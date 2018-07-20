import React, { Component } from 'react';
import PropTypes from 'prop-types';

require(`./RightSlidingPane.${process.env.NODE_ENV === 'storybook' ? 'scss' : 'css'}`);

class RightSlidingPane extends Component {
  state = {
    isOpen: false,
  }

  render() {
    const { isOpen } = this.state;
    const { children, pane } = this.props;
    const childrenWithProps = React.Children.map(children, child =>
      React.cloneElement(child, { onSliding: (isOpen = true) => this.setState({ isOpen }) }));

    return (
      <div className={`SlidingPaneWrapper ${isOpen ? 'Opened' : 'Closed'}`}>
        <div className={'SlidingBody'}>
          {childrenWithProps}
        </div>
        <div className={'SlidingPane'}>
          {pane({
            onSliding: (isOpen = false) => this.setState({ isOpen })
          })}
        </div>
      </div>
    );
  };
}

RightSlidingPane.propTypes = {
  children: PropTypes.node,
  pane: PropTypes.func.isRequired,
}

export default RightSlidingPane;
