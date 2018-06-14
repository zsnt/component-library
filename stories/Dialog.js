import React, { Component } from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, Dialog, Button, Select, TextInputField, Form } from '../lib';

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
    const selectOptions = [
      {
        option: 'House 1',
        value: 'house_1',
      },
      {
        option: 'House 2',
        value: 'house_2',
      },
      {
        option: 'Generator 1',
        value: 'generator_1',
      },
      {
        option: 'Fridge 1',
        value: 'fridge_1',
      },
    ];

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
          <Form>
            <Form.Element>
              <Select
                options={selectOptions}
                onChange={action('onChange')}
                label="Power Consumption"
              />
            </Form.Element>
            <Form.Element>
              <TextInputField
                label="Small Size"
                htmlFor="name"
                placeholder="Simulation Name"
                onChange={action('onChange')}
              />
            </Form.Element>
            <Form.Element>
              <Button
                label="Apply"
              />
            </Form.Element>
          </Form>
        </Dialog>
      </div>
    );
  }
}


storiesOf('D3A/Organisms/Form', module)
  .add(
    'Dialog',
    withInfo(`
      Dismisable dialog component

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
