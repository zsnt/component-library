import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, Card } from '../lib';

const wrapperStyle = {
  minHeight: '300px',
  padding: '25px',
  display: 'flex',
  justifyContent: 'space-between',
};

const divStyle = {
  maxWidth: '300px',
  margin: '0 auto',
};

storiesOf('D3A/Molecules', module)
  .add(
    'Card',
    withInfo(`
      Card molecule with Button

      ~~~js
        <Card>{children}</Card>
      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
          <Card style={divStyle}>
            <Card.Header>
              <Card.Headline>
                My Second Card
              </Card.Headline>
            </Card.Header>
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor si
            t amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l
            abore et dolore magna aliquyam erat,
            sed diam voluptua. At vero eos et accusam et justo duo
            dolores et ea rebum. Stet clita kasd gubergren,
            no sea takimata sanctus est Lorem ipsum dolor sit amet.
            <Card.Footer>
              <Card.Button onClick={action('clicked')} label="Card Button" />
            </Card.Footer>
          </Card>
          <Card style={divStyle}>
            <Card.Header>
              <Card.Headline>
                Lorem ipsum dolor
              </Card.Headline>
              <Card.Meta>
                erat, voluptua. At vero eos et accusam et justo duo dolores et ea rebum.
              </Card.Meta>
            </Card.Header>
            kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
            amet. Lorem ipsum dolor si
            t amet, consetetur sadipscing elitr, sed diam nonumy
            <Card.Footer>
              <Card.Button type="cta" onClick={action('clicked')} label="Card Button" />
            </Card.Footer>
          </Card>
        </div>
      </ThemeProvider>
    )),
  );
