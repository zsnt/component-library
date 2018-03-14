import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Headline } from '../lib';

const divStyle = {
  background: '#003950',
  padding: '15px',
};

storiesOf('D3A/Atoms/Headline', module)
  .add(
    'Headline 1',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Headline as="h1" type="h1"/>
      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Headline as="h1">
            Lorem Ipsum
          </Headline>
        </div>
      </ThemeProvider>
    )),
  )
  .add(
    'Headline 2',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Headline as="h2" type="h2"/>
      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Headline as="h2">
            Lorem Ipsum
          </Headline>
        </div>
      </ThemeProvider>
    )),
  )
  .add(
    'Headline 3',
    withInfo(`
      Headline 3

      ~~~js
      <Headline as="h3" type="h3"/>
      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Headline type="h3">
            Lorem Ipsum
          </Headline>
        </div>
      </ThemeProvider>
    )),
  )
  .add(
    'Headline 4',
    withInfo(`
      Headline 4

      ~~~js
      <Headline type="h4"/>
      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Headline type="h4">
            Lorem Ipsum
          </Headline>
        </div>
      </ThemeProvider>
    )),
  )
  .add(
    'Title',
    withInfo(`
      Title with divider

      ~~~js
      <Headline type="-title" />
      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Headline type="title">
            Lorem Ipsum
          </Headline>
        </div>
      </ThemeProvider>
    )),
  )
  .add(
    'Subtitle',
    withInfo(`
      subtitle

      ~~~js
      <Headline as="h1" type="subtitle"/>
      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Headline type="subtitle">
            Lorem Ipsum
          </Headline>
        </div>
      </ThemeProvider>
    )),
  );
