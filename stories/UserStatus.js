import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
import { ThemeProvider, UserStatus } from '../lib';
import logo from './img/Logo.png';

const divStyle = {
  background: '#003950',
  padding: '15px',
};

storiesOf('D3A/Organisms/UserStatus', module)
  .addDecorator(StoryRouter())
  .add(
    'With user not signed-in',
    withInfo()(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <UserStatus
            authenticated={false}
          />
        </div>
      </ThemeProvider>
    )),
  );
