import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Dialog, Button } from '../lib';

class DialogStory extends Component {
  constructor(props) {
    super(props);

    this.state = {
      show: false,
    };
  }

  toggleDialog = () => {
    this.setState({
      show: !this.state.show,
    });
  }

  render() {
    return (
      <div className="base">
        <Button
          label="open dialog"
          onClick={this.toggleDialog}
        />
        <Dialog
          show={this.state.show}
          onClose={this.toggleDialog}
          title="Configuration"
        >
          hello world
        </Dialog>
      </div>
    );
  }
}

storiesOf('D3A/Organisms/Form', module)
  .add(
    'Dialog',
    withInfo(`
      Dismissable dialog component

      ~~~js
      <Button
        label="open dialog"
        onClick={this.toggleDialog}
      />
      <Dialog
        show={this.state.show}
        onClose={this.toggleDialog}
      >
        hello world
      </Dialog>
      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <DialogStory />
      </ThemeProvider>
    )),
  );
