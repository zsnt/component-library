import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Diamond } from '../lib';

const divStyle = {
  padding: '50px',
};

storiesOf('D3A/Atoms', module)
  .add(
    'Diamond',
    withInfo(`
      Diamond Element which illustrates a Component in the Grid Configuration.

      ~~~js

      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Diamond
            kind="action"
            type="configuration"
          />
          <Diamond
            kind="entity"
            type="generator"
          />
          <Diamond
            kind="entity"
            type="house"
            active
          />
          <Diamond
            kind="device"
            type="light"
          />
          <Diamond
            kind="device"
            type="battery"
            active
          />
        </div>
      </ThemeProvider>
    )),
  );
