import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Layout } from '../lib';
import imageFile from './img/placeholder-2.jpg';

const image = {
  src: imageFile,
  alt: 'plsceholder',
};

storiesOf('D3A/Layouts', module)
  .add(
    'Results Page',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Layout layout="result">Children</Layout>
      ~~~

    `)(() => (
      <ThemeProvider theme="d3a">
        <Layout layout="wrapper">
          <div className="header">
            Logo

          </div>
          <Layout layout="results" className="content">
            <div className="hero">
              <h1>Hallo world</h1>
            </div>
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
