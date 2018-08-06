import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { action } from '@storybook/addon-actions';
import {
  Header,
  Headline,
  Button,
  Wrapper,
  Footer,
  Icons,
  DropDown,
  SellForm, InputGroup, Slider, RangeInput
} from '../../lib';
import { ThemeDecorator } from '../Utils';

import { BarLineChartData } from './__mocks__/BarLineChartData';

storiesOf('VERBUND/Pages', module)
  .addDecorator(ThemeDecorator('verbund'))
  .add(
    '3. SellPage',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Wrapper layout>
        <Header logoUrl={Icons.verbundLogo} logoAlt="Verbund">
          <Headline type="verbund-subtitle">Mieter Strom Modell</Headline>
        </Header>
        <Button
          className="settings"
          label="EInstellungen"
          type="verbund-secondary"
          icon={Icons.settings}
          onClick={action('clicked')}
        />
        <Headline type="page-title">
          Verkaufen Sie lorem dolor.
          <div className="info">Sie verfügen derzeit über 1.900 kWh</div>
        </Headline>
        <SellForm>
          <InputGroup title={'Wieviel % Ihres Kontigents möchten Sie anbieten?'}>
            <Slider onChange={action('changed')} />
          </InputGroup>
          <InputGroup title={'Über welchen Zeitraum ist ihr Angebot gültig?'}>
            <RangeInput />
            <DropDown type={'list'} value={'stunden'} handleChange={action('changed')} />
          </InputGroup>
          <InputGroup title={'Zu welchem Preis möchten Sie handeln?'} footer={'Preise in EUR pro kWh'}>
            <RangeInput value={1264} suffix={'€'} info={'Verkauf'} comma={true} />
          </InputGroup>
          <InputGroup className={'no-footer'}>
            <Button
              label="Verkaufen"
              type="verbund-primary"
              onClick={action('clicked')}
            />
            <Button
              label="Abbrechen"
              type="verbund-secondary"
              onClick={action('clicked')}
            />
          </InputGroup>
        </SellForm>
        <Footer>
          <div>© VERBUND AG 2018</div>
        </Footer>
      </Wrapper>
      ~~~

    `)(() => (
        <Wrapper layout>
          <Header logoUrl={Icons.verbundLogo} logoAlt="Verbund">
            <Headline type="verbund-subtitle">Mieter Strom Modell</Headline>
          </Header>
          <Button
            className="settings"
            label="EInstellungen"
            type="verbund-secondary"
            icon={Icons.settings}
            onClick={action('clicked')}
          />
          <Headline type="page-title">
            Verkaufen Sie lorem dolor.
            <div className="info">Sie verfügen derzeit über 1.900 kWh</div>
          </Headline>
          <SellForm>
            <InputGroup title={'Wieviel % Ihres Kontigents möchten Sie anbieten?'}>
              <Slider onChange={action('changed')} />
            </InputGroup>
            <InputGroup title={'Über welchen Zeitraum ist ihr Angebot gültig?'}>
              <RangeInput />
              <DropDown type={'list'} value={'stunden'} handleChange={action('changed')} />
            </InputGroup>
            <InputGroup title={'Zu welchem Preis möchten Sie handeln?'} footer={'Preise in EUR pro kWh'}>
              <RangeInput value={1264} suffix={'€'} info={'Verkauf'} comma={true} />
            </InputGroup>
            <InputGroup className={'no-footer'}>
              <Button
                label="Verkaufen"
                type="verbund-primary"
                onClick={action('clicked')}
              />
              <Button
                label="Abbrechen"
                type="verbund-secondary"
                onClick={action('clicked')}
              />
            </InputGroup>
          </SellForm>
          <Footer>
            <div>© VERBUND AG 2018</div>
          </Footer>
        </Wrapper>
      )),
  );
