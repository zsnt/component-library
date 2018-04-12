import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Tooltip, List } from '../lib';

const wrapperStyle = {
  minHeight: '300px',
  padding: '25px',
};

storiesOf('D3A/Molecules/Tooltip', module)
  .add(
    'Static Tooltip component',
    withInfo(`
      this is just the style, not the interactive component.

      ~~~js

      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
          <Tooltip>
            erat, voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          </Tooltip>
        </div>
      </ThemeProvider >

    )),
  )
  .add(
    'Static Tooltip with pointer',
    withInfo(`
      this tooltip goes on top of elements
      ~~~js

      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
          <Tooltip position="top">
            erat, voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita
          </Tooltip>
        </div>
      </ThemeProvider >

    )),
  )
  .add(
    'Static Tooltip with list element inside',
    withInfo(`
      this tooltip goes on top of elements
      ~~~js

      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
          <Tooltip>
            <List>
              <List.Element>
                First Element
              </List.Element>
              <List.Element>
                Second Element
              </List.Element>
              <List.Element>
                Third Element
                <List>
                  <List.Element>
                    First Child Element
                  </List.Element>
                  <List.Element>
                    Another Child Element
                  </List.Element>
                  <List.Element>
                    First Child Element
                  </List.Element>
                  <List.Element>
                    Another Child Element
                  </List.Element>
                </List>
              </List.Element>
              <List.Element>
                More Elements
              </List.Element>
            </List>
          </Tooltip>
        </div>
      </ThemeProvider>
    )),
  );
