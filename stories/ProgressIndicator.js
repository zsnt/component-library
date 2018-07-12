import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, ProgressIndicator } from '../lib';

import IconConfiguration from './img/icon_configuration.svg';
import IconGrid from './img/icon_grid.svg'
import IconRun from './img/icon_run.svg';
import IconChart from './img/icon_chart.svg';

const divStyle = {
  padding: '50px',
}
const steps = [
  {
    callback: action('onClick'),
    title:'General Setup',
    state: 'prev',
    iconUrl: IconConfiguration,
  },
  {
    callback: action('onClick'),
    title:'Grid Configuration',
    state: 'current',
    iconUrl: IconGrid,
  },
  {
    callback: action('onClick'),
    title:'Run Simulation',
    state: 'next',
    iconUrl: IconRun,
  },
  {
    callback: action('onClick'),
    title:'view Results',
    state: 'next',
    iconUrl: IconChart,
    inactive: true,
  }
];

storiesOf('D3A/Molecules', module)
  .add(
    'ProgressIndicator',
    withInfo(`
      Element which helps the user to orient and navigate trough a progress.

      ~~~js

      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <ProgressIndicator steps = {steps}/>
        </div>
      </ThemeProvider>
    )),
  );
