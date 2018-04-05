import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, List } from '../lib';

const wrapperStyle = {
  minHeight: '300px',
  padding: '25px',
};

const divStyle = {
  margin: '0 auto',
};

storiesOf('D3A/Molecules', module)
  .add(
    'List',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js

      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
          <List style={divStyle}>
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
              </List>
            </List.Element>
          </List>
        </div>
      </ThemeProvider>
    )),
  );
