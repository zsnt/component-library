import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Card, NumberPicker } from '../lib';

const wrapperStyle = {
  padding: '15px',
};
const cardStyle = {
  width: '300px',
  margin: '0 auto',
};

storiesOf('Organisms/NumberPicker', module)
  .add(
    'With default props',
    withInfo()(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
          <Card style={cardStyle}>
            <NumberPicker
              defaultValue={24}
              max={48}
            />
          </Card>
          <Card style={cardStyle}>
            <NumberPicker
              defaultValue={0.5}
              max={7}
              className="big"
              precision={1}
              step={0.5}
              label="big variant"
            />
          </Card>
        </div>
      </ThemeProvider>
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
