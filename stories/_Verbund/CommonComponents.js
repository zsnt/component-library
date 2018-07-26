import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  Headline,
  Wrapper, Button, Footer, FormInput, FormTitle,
  Icon, Icons,
  PageCard, PageCards, PageCardBox, PageCardItem,
} from '../../lib';
import { ThemeDecorator } from '../Utils';

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
        <Wrapper>
          <Button
            label="Anmelden"
            type="verbund-secondary"
            icon={Icons.login}
            onClick={action('clicked')}
          />
        </Wrapper>
        ~~~
  
      `)(() => (
        <Wrapper>
          <Button
            label="Anmelden"
            type="verbund-secondary"
            icon={Icons.login}
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
        <Wrapper>
          <FormInput
            label="E-Mail"
            type="default"
            onChange={action('changed')}
            icon={Icons.email}
          />
          <FormInput
            label="Password"
            type="default"
            onChange={action('changed')}
            icon={Icons.password}
          />
        </Wrapper>
        ~~~
  
      `)(() => (
        <Wrapper>
          <FormInput
            label="E-Mail"
            type="default"
            onChange={action('changed')}
            icon={Icons.email}
          />
          <FormInput
            label="Password"
            type="default"
            onChange={action('changed')}
            icon={Icons.password}
          />
        </Wrapper>
      ))
  );

storiesOf('VERBUND/Components/Common', module)
  .addDecorator(ThemeDecorator('verbund'))
  .add(
    'Icons',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <FormTitle label="Konto" />
        ~~~
  
      `)(() => (
        <Wrapper>
          <div style={{ display: 'flex' }}>
            <Icon icon="email" />
            <Icon icon="infoCircle" />
            <Icon icon="login" />
            <Icon icon="password" />
          </div>
        </Wrapper >
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
  )
  .add(
    'Page Title',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <Headline type="page-title">
          Übersicht Ihrer Aktivitäten in den letzten 30 Tagen
        </Headline>
        ~~~
  
      `)(() => (
        <Wrapper>
          <Headline type="page-title">
            Übersicht Ihrer Aktivitäten in den letzten 30 Tagen
            <div className="info">01.01.2017 - 31.01.2017</div>
          </Headline>
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
