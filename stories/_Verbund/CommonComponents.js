import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  Wrapper, Button, Footer,
} from '../../lib';
import { ThemeDecorator } from '../Utils';

storiesOf('VERBUND/Components/Common', module)
  .addDecorator(ThemeDecorator('verbund'))
  .add(
    'Button',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <Button
          label="Anmelden"
          type="intro"
          onClick={action('clicked')}
        />
        ~~~
  
      `)(() => (
        <Wrapper>
          <Button
            label="Anmelden"
            type="intro"
            onClick={action('clicked')}
          />
        </Wrapper>
      ))
  )
  .add(
    'Footer',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Footer type="default">
        <div>© VERBUND AG 2018</div>
      </Footer>
      ~~~

    `)(() => (
        <Wrapper>
          <Footer type="default">
            <div>© VERBUND AG 2018</div>
          </Footer>
        </Wrapper>
      ))
  );
