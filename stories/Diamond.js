import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Diamond } from '../lib';

import IconConfiguration from './img/icon_configuration.svg';
import IconRun from './img/icon_run.svg';
import IconPlus from './img/icon_plus.svg';
import IconGenerator from './img/icon_generator.svg';
import IconHouse from './img/icon_house.svg';
import IconLight from './img/icon_light.svg';
import IconBattery from './img/icon_battery.svg';

const divStyle = {
  padding: '50px',
};
const listStyle = {
  listStyleType: 'none',
};

const elementStyle = {
  paddingBottom: '10px',
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
              Anchor: configuration
              <Diamond
                kind="large"
                type="configuration"
                iconUrl={IconConfiguration}
                active
              />
            </li>
            <li style={elementStyle}>
              Action: run
              <Diamond
                kind="medium"
                type="run"
                iconUrl={IconRun}
              />
            </li>
            <li style={elementStyle}>
              Action: plus
              <Diamond
                kind="medium"
                type="plus"
                iconUrl={IconPlus}
              />
            </li>
            <li style={elementStyle}>
              Entity: generator
              <Diamond
                kind="medium"
                type="generator"
                iconUrl={IconGenerator}
              />
            </li>
            <li style={elementStyle}>
              Entity: house in active-state
              <Diamond
                kind="medium"
                type="house"
                active
                iconUrl={IconHouse}
              />
            </li>
            <li style={elementStyle}>
              Device: light
              <Diamond
                kind="small"
                type="light"
                iconUrl={IconLight}
              />
            </li>
            <li style={elementStyle}>
              Device: battery in active-state
              <Diamond
                kind="small"
                type="battery"
                iconUrl={IconBattery}
                active
              />
            </li>
          </ul>
        </div>
      </ThemeProvider>
    )),
  );
