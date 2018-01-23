import React from 'react';
import { storiesOf } from '@storybook/react';
import { NumberPicker } from '../build';

storiesOf('NumberPicker', module)
  .add(
    'default',
    () => (
      <NumberPicker />
    ),
  );
