import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Layout, Header, Hero, Card } from '../lib';
import imageFile from './img/placeholder-2.jpg';
import logo from './img/Logo.png';

const image = {
  src: imageFile,
  alt: 'placeholder',
};

storiesOf('D3A/Layouts', module).add(
  'Results Page',
  withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Layout layout="result">Children</Layout>
      ~~~

    `)(() => (
      <ThemeProvider theme="d3a">
        <Layout layout="wrapper">
          <Header logoUrl={logo} logoLink="/" logoAlt="D3ASIM" />
          <Layout layout="results" className="content">
            <Hero
              titleText="Results Page"
              subtitleText="shows all the pretty results to the stuff with shiny graphs"
            />
            <div className="gridLevel">
              <h2>Grid Level</h2>
            </div>
            <div className="container result1">
              <Card>
                <Card.Headline>Result 1</Card.Headline>
                <Card.Meta>blubb</Card.Meta>
                <table>
                  <tbody>
                    <tr>
                      <td>Average trade price</td>
                      <td>29,16€</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </div>
            <div className="container result2">
              <Card>
                <img src={image.src} alt={image.alt} />
              </Card>
            </div>
            <div className="marketLevel">
              <h2>Market overview</h2>
            </div>
            <div className="container result3">
              <Card>
                <Card.Headline>Result 4</Card.Headline>

                <img src={image.src} alt={image.alt} />
              </Card>
            </div>
            <div className="container result4">
              <Card>
                <Card.Headline>Result 3</Card.Headline>
                <Card.Meta>
                  tempor invidunt ut labore et dolore magna aliquyam erat
                </Card.Meta>
                sed diam voluptua.
                At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </Card>
            </div>
            <div className="container result5">
              <Card>
                <Card.Header>
                  <Card.Headline>Result number 5</Card.Headline>
                  <Card.Meta>Some different text</Card.Meta>
                </Card.Header>
                dolores et ea rebum. Stet clita kasd gubergren,
                no sea takimata sanctus est Lorem ipsum dolor sit amet.
              </Card>
            </div>
          </Layout>
          <div className="footer">
            <a href="foo">About</a>
          </div>
        </Layout>
      </ThemeProvider>
  )),
);
