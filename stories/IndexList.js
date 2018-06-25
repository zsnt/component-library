import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, IndexList } from '../lib';
import IconConfiguration from './img/icon_configuration.svg';
import IconRun from './img/icon_run.svg';
import IconCross from './img/icon_cross.svg';

const wrapperStyle = {
  minHeight: '300px',
  padding: '25px',
  display: 'flex',
  justifyContent: 'space-between',
};

const indexEntries = [
  {
    entry: 'Two Homes one Generator',
    actions: [
      {
        callback: action('onClick'),
        label: 'run',
        icon: IconRun,
      },
      {
        callback: action('onClick'),
        label: 'edit',
        icon: IconConfiguration,
      },
      {
        callback: action('onClick'),
        label: 'delete',
        icon: IconCross,
      },
    ],
  },
  {
    entry: 'Five Homes with PV',
    actions: [
      {
        callback: action('onClick'),
        label: 'run',
        icon: IconRun,
      },
      {
        callback: action('onClick'),
        label: 'edit',
        icon: IconConfiguration,
      },
      {
        callback: action('onClick'),
        label: 'delete',
        icon: IconCross,
      },
    ],
  },
];

const Entries = indexEntries.map(element => (
  <IndexList.Element key={`listIndex-${element.entry}`} entry={element.entry} actions={element.actions} />
));

storiesOf('D3A/Molecules', module)
  .add(
    'IndexList',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js

      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
          <IndexList>
            {Entries}
          </IndexList>
        </div>
      </ThemeProvider>
    )),
  );
