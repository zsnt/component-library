import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, TextInputField } from '../lib';

const wrapperStyle = {
  padding: '15px',
};

storiesOf('D3A/Atoms', module)
  .add(
    'TextInputField',
    withInfo()(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
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
        </div>
      </ThemeProvider>
    )),
  );
