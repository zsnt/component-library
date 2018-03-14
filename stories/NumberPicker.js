import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { NumberPicker } from '../lib';

storiesOf('Organisms/NumberPicker', module)
  .add(
    'With default props',
    withInfo()(() => (
      <NumberPicker
        defaultValue={24}
        max={48}
      />
    )),
  )
  .add(
    'With decimal digits, currency symbol & text label',
    withInfo()(() => (
      <NumberPicker
        defaultValue={2}
        label="Einkauf"
        currencySymbol="€"
        min={-10}
        max={10}
        precision={2}
      />
    )),
  )
  .add(
    'With decimal digits, currency symbol, text label & custom steps',
    withInfo()(() => (
      <NumberPicker
        defaultValue={2.64}
        label="Verkauf"
        currencySymbol="€"
        min={-10}
        max={10}
        precision={2}
        step={0.01}
      />
    )),
  )
  .add(
    'With disabled state',
    withInfo()(() => (
      <NumberPicker
        disabled
      />
    )),
  );
