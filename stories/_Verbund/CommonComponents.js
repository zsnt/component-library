import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  Headline,
  Wrapper, Button, Footer, FormInput, FormTitle,
  Icon, Icons,
  PageCard, PageCards, PageCardBox,
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

storiesOf('VERBUND/Components/Common/Card', module)
  .addDecorator(ThemeDecorator('verbund'))
  .add(
    'Card Title',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <Headline type="card-title">
          Verbrauch
          <div className="info">Anteil PV gegenüber Lieferanten</div>
        </Headline>
        ~~~
  
      `)(() => (
        <Wrapper>
          <Headline type="card-title">
            Verbrauch
            <div className="info">Anteil PV gegenüber Lieferanten</div>
          </Headline>
        </Wrapper>
      ))
  )
  .add(
    'Page Card',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Wrapper>
        <PageCard>
          <Headline type="card-title">
            Verbrauch
          <div className="info">Anteil PV gegenüber Lieferanten</div>
          </Headline>
        </PageCard>
      </Wrapper >
      ~~~

    `)(() => (
        <Wrapper>
          <PageCard>
            <Headline type="card-title">
              Verbrauch
            <div className="info">Anteil PV gegenüber Lieferanten</div>
            </Headline>
          </PageCard>
        </Wrapper >
      ))
  )
  .add(
    'Cards',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Wrapper layout>
        <PageCards>
          <PageCards>
            <PageCard>
              <Headline type="card-title">
                Verbrauch
                <div className="info">Anteil PV gegenüber Lieferanten</div>
              </Headline>
            </PageCard>
            <PageCard>
              <Headline type="card-title">
                Ersparnis
                <div className="info">Ersparnis gegenüber Lieferanten</div>
              </Headline>
            </PageCard>
          </PageCards>
          <PageCard>
            <PageCardBox>
              <Headline type="card-title">
                IhrPV-Anteil<img src={Icons.infoCircle} />
                <div className="info">Ohne Handel verfügbare Menge an PV Energie</div>
              </Headline>
              <Headline type="card-text-large">
                1.900<div className="unit">kWh</div>
              </Headline>
            </PageCardBox>
            <PageCardBox>
              <Headline type="card-title">
                Ihr Verbrauch<img src={Icons.infoCircle} />
                <div className="info">Ihr tatsächlicher PV-Energie Konsum</div>
              </Headline>
              <Headline type="card-text-large">
                450<div className="unit">kWh</div>
              </Headline>
            </PageCardBox>
            <PageCardBox>
              <Headline type="card-title">
                Ihr Kontigent<img src={Icons.infoCircle} />
                <div className="info">Ihr aktuell verbleibendes Kontingent</div>
              </Headline>
              <Headline type="card-text-large">
                1.200<div className="unit">kWh</div>
              </Headline>
            </PageCardBox>
            <div style={{ textAlign: 'center', paddingTop: 30, paddingBottom: 16 }}>
              <Button
                label="Strom anbieten"
                type="verbund-primary"
                onClick={action('clicked')}
              />
            </div>
          </PageCard>
        </PageCards>
        <PageCards>
          <PageCard>
            <Headline type="card-title">
              Wochen-Übersicht
              <div className="info">Maecenas faucibus mollis interdum.</div>
            </Headline>
          </PageCard>
          <PageCard>
            <Headline type="card-title">
              Tages-Übersicht
              <div className="info">Maecenas faucibus mollis interdum.</div>
            </Headline>
          </PageCard>
        </PageCards>
      </Wrapper>
      ~~~

    `)(() => (
        <Wrapper layout>
          <PageCards>
            <PageCards>
              <PageCard>
                <Headline type="card-title">
                  Verbrauch
                  <div className="info">Anteil PV gegenüber Lieferanten</div>
                </Headline>
              </PageCard>
              <PageCard>
                <Headline type="card-title">
                  Ersparnis
                  <div className="info">Ersparnis gegenüber Lieferanten</div>
                </Headline>
              </PageCard>
            </PageCards>
            <PageCard>
              <PageCardBox>
                <Headline type="card-title">
                  IhrPV-Anteil<img src={Icons.infoCircle} />
                  <div className="info">Ohne Handel verfügbare Menge an PV Energie</div>
                </Headline>
                <Headline type="card-text-large">
                  1.900<div className="unit">kWh</div>
                </Headline>
              </PageCardBox>
              <PageCardBox>
                <Headline type="card-title">
                  Ihr Verbrauch<img src={Icons.infoCircle} />
                  <div className="info">Ihr tatsächlicher PV-Energie Konsum</div>
                </Headline>
                <Headline type="card-text-large">
                  450<div className="unit">kWh</div>
                </Headline>
              </PageCardBox>
              <PageCardBox>
                <Headline type="card-title">
                  Ihr Kontigent<img src={Icons.infoCircle} />
                  <div className="info">Ihr aktuell verbleibendes Kontingent</div>
                </Headline>
                <Headline type="card-text-large">
                  1.200<div className="unit">kWh</div>
                </Headline>
              </PageCardBox>
              <div style={{ textAlign: 'center', paddingTop: 30, paddingBottom: 16 }}>
                <Button
                  label="Strom anbieten"
                  type="verbund-primary"
                  onClick={action('clicked')}
                />
              </div>
            </PageCard>
          </PageCards>
          <PageCards>
            <PageCard>
              <Headline type="card-title">
                Wochen-Übersicht
                <div className="info">Maecenas faucibus mollis interdum.</div>
              </Headline>
            </PageCard>
            <PageCard>
              <Headline type="card-title">
                Tages-Übersicht
                <div className="info">Maecenas faucibus mollis interdum.</div>
              </Headline>
            </PageCard>
          </PageCards>
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
