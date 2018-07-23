import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  Wrapper, Button, Footer, FormInput, FormTitle,
} from '../../lib';
import { ThemeDecorator } from '../Utils';

import IconLogin from '../img/icon_login.svg';
import IconEmail from '../img/icon_email.svg';
import IconPassword from '../img/icon_password.svg';

storiesOf('VERBUND/Components/Common/Button', module)
  .addDecorator(ThemeDecorator('verbund'))
  .add(
    'primary',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <Button
          label="Anmelden"
          type="verbund-primary"
          onClick={action('clicked')}
        />
        ~~~
  
      `)(() => (
        <Wrapper>
          <Button
            label="Anmelden"
            type="verbund-primary"
            onClick={action('clicked')}
          />
        </Wrapper>
      ))
  )
  .add(
    'secondary',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <Button
          label="Übernehmen"
          type="verbund-secondary"
          onClick={action('clicked')}
        />
        ~~~
  
      `)(() => (
        <Wrapper>
          <Button
            label="Übernehmen"
            type="verbund-secondary"
            onClick={action('clicked')}
          />
        </Wrapper>
      ))
  )
  .add(
    'secondary with icon',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <Button
          label="Anmelden"
          type="verbund-secondary"
          onClick={action('clicked')}
        />
        ~~~
  
      `)(() => (
        <Wrapper>
          <Button
            label="Anmelden"
            type="verbund-secondary"
            icon={IconLogin}
            onClick={action('clicked')}
          />
        </Wrapper>
      ))
  );

storiesOf('VERBUND/Components/Common/Input', module)
  .addDecorator(ThemeDecorator('verbund'))
  .add(
    'primary',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <FormInput
          label="Input Here ..."
          type="default"
          onChange={action('changed')}
        />
        ~~~
  
      `)(() => (
        <Wrapper>
          <FormInput
            label="Input Here ..."
            type="default"
            onChange={action('changed')}
          />
        </Wrapper>
      ))
  )
  .add(
    'primary with icon',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <FormInput
          label="E-Mail"
          type="default"
          onChange={action('changed')}
          icon={IconEmail}
        />
        ~~~
  
      `)(() => (
        <Wrapper>
          <FormInput
            label="E-Mail"
            type="default"
            onChange={action('changed')}
            icon={IconEmail}
          />
          <FormInput
            label="Password"
            type="default"
            onChange={action('changed')}
            icon={IconPassword}
          />
        </Wrapper>
      ))
  );

storiesOf('VERBUND/Components/Common/Title', module)
  .addDecorator(ThemeDecorator('verbund'))
  .add(
    'default',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <FormTitle label="Konto" />
        ~~~
  
      `)(() => (
        <Wrapper>
          <FormTitle />
        </Wrapper>
      ))
  );

storiesOf('VERBUND/Components/Common', module)
  .addDecorator(ThemeDecorator('verbund'))
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
