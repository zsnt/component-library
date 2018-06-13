import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import { ThemeProvider, Switch, Card } from '../lib';

const wrapperStyle = {
  padding: '15px',
};

const cardStyle = {
  width: '300px',
  margin: '15px auto',
};

storiesOf('D3A/Atoms/FormFields', module)
  .add(
    'Switch',
    withInfo()(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={wrapperStyle}>
          <Card style={cardStyle}>
            <Switch
              onChange={action('onChange')}
              checked
            />
            <br />
            <Switch
              onChange={action('onChange')}
              id="switch2"
              name="switch2"
              label="Flip the switch:"
            />
          </Card>
        </div>

      </ThemeProvider>
    )),
  );
