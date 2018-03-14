import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, Button } from '../lib';

storiesOf('D3A/Atoms/Button', module)
  .add(
    'primary',
    withInfo(`
      <Button />
    `)(() => (
      <ThemeProvider theme="d3a">
        <Button
          label="primary"
          onClick={action('clicked')}
        />
      </ThemeProvider>
    )),
  )
  .add(
    'secondary',
    withInfo(`
      <Button type="secondary"/>
    `)(() => (
      <ThemeProvider theme="d3a">
        <Button
          label="reconfigure"
          type="secondary"
          onClick={action('clicked')}
        />
      </ThemeProvider>
    )),
  );
