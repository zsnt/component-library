import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, TextInputField, Card } from '../lib';

const wrapperStyle = {
  padding: '15px',
};

const cardStyle = {
  width: '300px',
  margin: '15px auto',
};

storiesOf('D3A/Atoms/FormFields', module)
  .add(
    'TextInput Field',
    withInfo()(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
          <Card style={cardStyle}>
            <TextInputField
              label="Small Size"
              htmlFor="name"
              placeholder="Simulation Name"
              onChange={action('onChange')}
            />
            <TextInputField
              label="Medium Size"
              kind="medium"
              htmlFor="name"
              placeholder="Simulation Name"
              onChange={action('onChange')}
            />
          </Card>
        </div>

      </ThemeProvider>
    )),
  );
