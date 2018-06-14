import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, Form, Label, TextInputField, NumberPicker, Select, Card } from '../lib';

const selectOptions = [
  {
    option: 'Sunny',
    value: 'house_1',
  },
  {
    option: 'Partly cloudy',
    value: 'house_2',
  },
  {
    option: 'Cloudy',
    value: 'generator_1',
  },
];

const wrapperStyle = {
  padding: '15px',
};

const cardStyle = {
  width: '300px',
  margin: '15px auto',
};

storiesOf('D3A/Atoms/FormFields', module)
  .add(
    'Form',
    withInfo(`
      general form element

      ~~~js

      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
          <Card style={cardStyle}>
            <Form>
              <Form.Element>
                <TextInputField
                  label="Name of your Simulation:"
                  placeholder="My Simulation #1"
                  kind="medium"
                />
              </Form.Element>
              <Form.Element>
                <Label
                  label="Duration:"
                />
                <NumberPicker
                  kind="medium"
                  label="Days"
                />
              </Form.Element>
              <Form.Element>
                <Select
                  options={selectOptions}
                  onChange={action('onChange')}
                  className="myFancyClass"
                  label="Solar Profile:"
                  kind="medium"
                />
              </Form.Element>
            </Form>
          </Card>
        </div>
      </ThemeProvider>
    )),
  );
