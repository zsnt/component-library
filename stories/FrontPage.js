import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import StoryRouter from 'storybook-react-router';
import { ThemeProvider, Layout, Header, Hero, Headline, Button, CardList } from '../lib';
import imageFile from './img/placeholder-2.jpg';
import logo from './img/Logo.png';

storiesOf('D3A/Layouts', module)
  .addDecorator(StoryRouter())
  .add(
    'Front Page',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Layout layout="frontPage">Children</Layout>
      ~~~

    `)(() => (
      <ThemeProvider theme="d3a">
        <Layout layout="wrapper">
          <Header
            logoUrl={logo}
            logoLink="/"
            logoAlt="D3ASIM"
          />
          <Layout layout="frontPage" className="content">
            <Hero
              titleText="Welcome to D3A Alpha"
              subtitleText="shows all the pretty results to the stuff with shiny graphs"
            >
              <Button label="Start a Simulation" />
            </Hero>
            <section className="intro">
              <Headline type="title" as="h2">
                Example Simulations
              </Headline>
              <Headline type="subtitle">
                Some introduction text about the configurations and the general awesomness.
              </Headline>
            </section>
            <section className="configurations">
              <CardList>
                <CardList.Card className="cardList__card">
                  <CardList.Card.Header>
                    <CardList.Card.Headline>
                      Second Card
                    </CardList.Card.Headline>
                  </CardList.Card.Header>
                  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                  amet. Lorem ipsum dolor si
                  t amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l
                  abore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et accusam et justo duo
                  dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  <CardList.Card.Footer>
                    <CardList.Card.Button onClick={action('clicked')} label="Card Button" />
                  </CardList.Card.Footer>
                </CardList.Card>
                <CardList.Card className="cardList__card">
                  <CardList.Card.Header>
                    <CardList.Card.Headline>
                      Second Card
                    </CardList.Card.Headline>
                  </CardList.Card.Header>
                  <img src={imageFile} alt="placeholder" />
                  <CardList.Card.Footer>
                    <CardList.Card.Button type="secondary" onClick={action('clicked')} label="Card Button" />
                  </CardList.Card.Footer>
                </CardList.Card>
                <CardList.Card className="cardList__card">
                  <CardList.Card.Header>
                    <CardList.Card.Headline>
                      Second Card
                    </CardList.Card.Headline>
                  </CardList.Card.Header>
                  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                  amet. Lorem ipsum dolor si
                  t amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l
                  abore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et accusam et justo duo
                  dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  <CardList.Card.Footer>
                    <CardList.Card.Button onClick={action('clicked')} label="Card Button" />
                  </CardList.Card.Footer>
                </CardList.Card>
                <CardList.Card className="cardList__card">
                  <CardList.Card.Header>
                    <CardList.Card.Headline>
                      Second Card
                    </CardList.Card.Headline>
                  </CardList.Card.Header>
                  <img src={imageFile} alt="placeholder" />
                  <CardList.Card.Footer>
                    <CardList.Card.Button type="secondary" onClick={action('clicked')} label="Card Button" />
                  </CardList.Card.Footer>
                </CardList.Card>
                <CardList.Card className="cardList__card">
                  <CardList.Card.Header>
                    <CardList.Card.Headline>
                      Second Card
                    </CardList.Card.Headline>
                  </CardList.Card.Header>
                  kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit
                  amet. Lorem ipsum dolor si
                  t amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut l
                  abore et dolore magna aliquyam erat,
                  sed diam voluptua. At vero eos et accusam et justo duo
                  dolores et ea rebum. Stet clita kasd gubergren,
                  no sea takimata sanctus est Lorem ipsum dolor sit amet.
                  <CardList.Card.Footer>
                    <CardList.Card.Button onClick={action('clicked')} label="Card Button" />
                  </CardList.Card.Footer>
                </CardList.Card>
              </CardList>
            </section>
          </Layout>
          <div className="footer">
            <a href="foo">About</a>
          </div>
        </Layout>
      </ThemeProvider>
  )),
);
