import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, Button } from '../lib';
import IconSolar from './img/icon_solar.svg';
const divStyle = {
  padding: '15px',
};

storiesOf('D3A/Atoms/Button', module)
  .add(
    'primary',
    withInfo(`
      <Button />
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Button
            label="primary"
            onClick={action('clicked')}
          />
        </div>
      </ThemeProvider>
    )),
  )
  .add(
    'secondary',
    withInfo(`
      <Button type="secondary"/>
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Button
            label="reconfigure"
            type="secondary"
            onClick={action('clicked')}
          />
        </div>
      </ThemeProvider>
    )),
  )
  .add(
    'call to action',
    withInfo(`
      <Button type="cta" />
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Button
            type="cta"
            label="Action"
            onClick={action('clicked')}
          />
        </div>
      </ThemeProvider>
    )),
  )
  .add(
    'icon',
    withInfo(`
      <Button type="icon" icon={IconSolar} />
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Button
            type="icon"
            label="SolarPower"
            icon={IconSolar}
            onClick={action('clicked')}
          />
        </div>
      </ThemeProvider>
    )),
  );
