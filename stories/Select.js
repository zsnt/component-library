import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, Select, Card } from '../lib';

const selectOptions = [
  {
    option: 'House 1',
    value: 'house_1',
  },
  {
    option: 'House 2',
    value: 'house_2',
  },
  {
    option: 'Generator 1',
    value: 'generator_1',
  },
  {
    option: 'Fridge 1',
    value: 'fridge_1',
  },
];

const wrapperStyle = {
  padding: '15px',
};
const cardStyle = {
  width: '300px',
  margin: '0 auto',
};

storiesOf('D3A/Atoms', module)
  .add(
    'Native Select',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js

      ~~~
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
          <Card style={cardStyle}>
            <Select
              options={selectOptions}
              onChange={action('onChange')}
              className="myFancyClass"
            />
          </Card>
        </div>
      </ThemeProvider>
    )),
  );
