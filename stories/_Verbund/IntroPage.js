import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  Header, Headline, Button,
  Wrapper, Section, Footer,
} from '../../lib';
import { ThemeDecorator } from '../Utils';
import imageFile from '../img/placeholder-2.jpg';
import logo from '../img/Verbund/Logo.svg';

storiesOf('VERBUND/Pages', module)
  .addDecorator(ThemeDecorator('verbund'))
  .add(
    '1. Intro',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Wrapper>
        <Header
          logoUrl={logo}
          logoAlt="Verbund"
        >
          <Headline type="verbund-subtitle">
            Mieter Strom Modell
          </Headline>
        </Header>
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
      </Wrapper>
      ~~~

    `)(() => (
        <Wrapper layout>
          <Header
            logoUrl={logo}
            logoAlt="Verbund"
          >
            <Headline type="verbund-subtitle">
              Mieter Strom Modell
            </Headline>
          </Header>
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
          <Footer type="intro">
            <div>© VERBUND AG 2018</div>
          </Footer>
        </Wrapper>
      )),
);
