import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Layout, Header, Hero } from '../lib';
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
            <div className="averageTable">
              <table>
                <tbody>
                  <tr>
                    <td>Average trade price</td>
                    <td>29,16€</td>
                  </tr>
                </tbody>
              </table>
            </div>
            <div className="gridPicture">
              <img src={image.src} alt={image.alt} />
            </div>
            <div className="marketLevel">
              <h2>Market overview</h2>
            </div>
            <div className="result1">
            Result 1
              <img src={image.src} alt={image.alt} />
            </div>
            <div className="result2">
            Result 2
              <img src={image.src} alt={image.alt} />
            </div>
          </Layout>
          <div className="footer">
            <a href="foo">About</a>
          </div>
        </Layout>
      </ThemeProvider>
  )),
);
