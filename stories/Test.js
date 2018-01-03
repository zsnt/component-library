import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { Button } from '../build';

storiesOf('ThemeLight/Button', module)
  .add(
    'this shows the light theme',
    () => (
      <div class="theme-light">
        <Button
          label="foobar"
          onClick={action('clicked')}
        />
      </div>
    ));
storiesOf('ThemeDark/Button', module)
  .add('this shows the dark theme',
    () => (
      <div class="theme-dark">
        <Button
          label="baz"
          onClick={action('clicked')}
        />
      </div>
  ));
