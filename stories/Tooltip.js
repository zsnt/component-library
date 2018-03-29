import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Tooltip } from '../lib';

const wrapperStyle = {
  minHeight: '300px',
  padding: '25px',
};

storiesOf('D3A/Molecules/Tooltip', module)
  .add(
    'Static Tooltip component',
    withInfo(`
      this is just the style, not the interactive component.

      ~~~js

      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
          <Tooltip>
            erat, voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          </Tooltip>
        </div>
      </ThemeProvider >

    )),
  );
