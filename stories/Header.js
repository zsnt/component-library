import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
import { ThemeProvider, Header, UserStatus } from '../lib';
import logo from './img/Logo.png';

const divStyle = {
  background: '#003950',
  padding: '15px',
};

storiesOf('D3A/Organisms/Header', module)
  .addDecorator(StoryRouter())
  .add(
    'With user not signed-in',
    withInfo(`
      Site header displaying site logo which links to home page and navigation for authenticating.
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Header
            logoUrl={logo}
            logoLink="/"
            logoAlt="D3ASIM"
          >
            <UserStatus />
          </Header>
        </div>
      </ThemeProvider>
    )),
  )
  .add(
    'With user signed-in',
    withInfo(`
      Site header displaying site logo which links to home page and username for signed-in users.
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Header
            logoUrl={logo}
            logoLink="/"
            logoAlt="D3ASIM"
          >
            <UserStatus
              authenticated
              username="ExampleUsername"
            />
          </Header>
        </div>
      </ThemeProvider>
    )),
  );
