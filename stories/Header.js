import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Header } from '../lib';
import logo from './img/Logo.png';

const divStyle = {
  background: '#003950',
  padding: '15px',
};

storiesOf('D3A/Organisms', module)
  .add(
    'Header',
    withInfo(`
      Big header area called Hero. Accepts Title and Subtitle and other children.
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Header
            logoUrl={logo}
            logoLink="/"
            logoAlt="D3ASIM"
          />
        </div>
      </ThemeProvider>
    )),
  );
