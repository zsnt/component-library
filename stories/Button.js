import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, Button } from '../build';

storiesOf('ThemeLight/Button', module)
  .add(
    'this shows the light theme',
    () => (
      <ThemeProvider className="theme-light">
        <Button
          label="foobar"
          onClick={action('clicked')}
        />
      </ThemeProvider>
    )
  );
storiesOf('ThemeDark/Button', module)
  .add(
    'this shows the dark theme',
    () => (
      <ThemeProvider className="theme-dark">
        <Button
          label="berry"
          onClick={action('clicked')}
        />
      </ThemeProvider>
    )
  );
