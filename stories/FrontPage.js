import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Layout, Header, Hero, Headline, Button } from '../lib';
import imageFile from './img/placeholder-2.jpg';
import logo from './img/Logo.png';

const image = {
  src: imageFile,
  alt: 'plsceholder',
};

storiesOf('D3A/Layouts', module).add(
  'Front Page',
  withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Layout layout="result">Children</Layout>
      ~~~

    `)(() => (
      <ThemeProvider theme="d3a">
        <Layout layout="wrapper">
          <Header logoUrl={logo} logoLink="/" logoAlt="D3ASIM" />
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
                Some introduction text about the configurations and the general awsomness.
              </Headline>
            </section>
            <section className="configurations">
              <img src={image.src} alt={image.alt} />
            </section>
          </Layout>
          <div className="footer">
            <a href="foo">About</a>
          </div>
        </Layout>
      </ThemeProvider>
  )),
);
