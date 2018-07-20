import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  Wrapper, Section, Button,
} from '../../lib';
import { ThemeDecorator } from '../Utils';

storiesOf('VERBUND/Components/Intro/Section/Components', module)
  .addDecorator(ThemeDecorator('verbund'))
  .add(
    'Title',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Section type="intro-title">Intro Title</Section>
      ~~~

    `)(() => (
        <Wrapper>
          <Section type="intro-title">
            Schließlich ist es<br />
            Ihr Strom.
          </Section>
        </Wrapper>
      ))
  )
  .add(
    'Subtitle',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <Section type="intro-subtitle">
          Sed posuere consectetur est at lobortis. Integer posuere erat a ante<br />
          venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibu<br />
          magnis dis parturient montes, nascetur ridiculus mus.
        </Section>
        ~~~
  
      `)(() => (
        <Wrapper>
          <Section type="intro-subtitle">
            Sed posuere consectetur est at lobortis. Integer posuere erat a ante<br />
            venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibu<br />
            magnis dis parturient montes, nascetur ridiculus mus.
          </Section>
        </Wrapper>
      ))
  );
storiesOf('VERBUND/Components/Intro/Section', module)
  .addDecorator(ThemeDecorator('verbund'))
  .add(
    'Demo',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Section type="intro-title">
        Schließlich ist es<br />
        Ihr Strom.
        <Section type="intro-subtitle">
          Sed posuere consectetur est at lobortis. Integer posuere erat a ante<br />
          venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibu<br />
          magnis dis parturient montes, nascetur ridiculus mus.
        </Section>
        <div className="circles">
          <div className="circle fill" />
          <div className="circle" />
          <div className="circle" />
        </div>
      </Section>
      <Button
        label="Anmelden"
        type="intro"
        onClick={action('clicked')}
      />
      ~~~

    `)(() => (
        <Wrapper component>
          <Section type="intro-title">
            Schließlich ist es<br />
            Ihr Strom.
            <Section type="intro-subtitle">
              Sed posuere consectetur est at lobortis. Integer posuere erat a ante<br />
              venenatis dapibus posuere velit aliquet. Cum sociis natoque penatibu<br />
              magnis dis parturient montes, nascetur ridiculus mus.
            </Section>
            <div className="circles">
              <div className="circle fill" />
              <div className="circle" />
              <div className="circle" />
            </div>
          </Section>
          <Button
            label="Anmelden"
            type="verbund-primary"
            onClick={action('clicked')}
          />
        </Wrapper>
      )),
);
