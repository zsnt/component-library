import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Diamond } from '../lib';

const divStyle = {
  padding: '50px',
};
const listStyle = {
  listStyleType: 'none',
};

const elementStyle = {
  paddingBottom: '10px',
  listStyle
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
          <ul style={listStyle}>
            <li style={elementStyle}>
              <Diamond
                kind="action"
                type="configuration"
              />
            </li>
            <li style={elementStyle}>
              <Diamond
                kind="entity"
                type="generator"
              />
            </li>
            <li style={elementStyle}>
              <Diamond
                kind="entity"
                type="house"
                active
              />
            </li>
            <li style={elementStyle}>
              <Diamond
                kind="device"
                type="light"
              />
            </li>
            <li style={elementStyle}>
              <Diamond
                kind="device"
                type="battery"
                active
              />
            </li>
          </ul>
        </div>
      </ThemeProvider>
    )),
  );
