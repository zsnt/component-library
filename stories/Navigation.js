import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Navigation, Button } from '../lib';

const divStyle = {
  background: '#003950',
  padding: '15px',
  width: '500px',
};

storiesOf('D3A/Organisms', module)
  .add(
    'Navigation',
    withInfo(`
      Navigation element
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Navigation>
            <a href="/#">Link to</a>
            <a href="/#">Goto</a>
            <Button label="Buttonlink" />
          </Navigation>
        </div>
      </ThemeProvider>
    )),
  );
