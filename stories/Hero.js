import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Hero } from '../lib';

const divStyle = {
  background: '#003950',
  padding: '15px',
};

storiesOf('D3A/Molekules', module)
  .add(
    'Hero',
    withInfo(`
      Big header area called Hero. Accepts Title and Subtitle and other children.
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Hero
            titleText="Results Page"
            subtitleText="shows all the pretty results to the stuff with shiny graphs"
          />
        </div>
      </ThemeProvider>
    )),
  );
