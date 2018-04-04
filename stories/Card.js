import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Card } from '../lib';

const wrapperStyle = {
  minHeight: '300px',
  padding: '25px',
};

const divStyle = {
  width: '300px',
  margin: '0 auto',
};

storiesOf('D3A/Molecules', module)
  .add(
    'Card',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js

      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
          <Card style={divStyle}>
            <Card.Headline>
              Lorem ipsum dolor
            </Card.Headline>
            <Card.Meta>
              erat, voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
            </Card.Meta>
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor si
            t amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l
            abore et dolore magna aliquyam erat,
             sed diam voluptua. At vero eos et accusam et justo duo
             dolores et ea rebum. Stet clita kasd gubergren,
             no sea takimata sanctus est Lorem ipsum dolor sit amet.
          </Card>
        </div>
      </ThemeProvider>
    )),
  );
