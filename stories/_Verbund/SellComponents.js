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

storiesOf('VERBUND/Components/Sell', module)
  .addDecorator(ThemeDecorator('verbund'))
  .add(
    'Slider Input',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Wrapper>
        <SellForm>
          <InputGroup title={'Wieviel % Ihres Kontigents möchten Sie anbieten?'}>
            <Slider onChange={action('changed')} />
          </InputGroup>
        </SellForm>
      </Wrapper>
      ~~~

    `)(() => (
        <Wrapper>
          <SellForm>
            <InputGroup title={'Wieviel % Ihres Kontigents möchten Sie anbieten?'}>
              <Slider onChange={action('changed')} />
            </InputGroup>
          </SellForm>
        </Wrapper>
      )),
)
  .add(
    'Range Input',
    withInfo(`
  description or documentation about my component, supports markdown

  ~~~js
  <Wrapper>
    <SellForm>
      <InputGroup title={'Wieviel % Ihres Kontigents möchten Sie anbieten?'}>
        <RangeInput />
        <RangeInput value={1264} suffix={'€'} info={'Verkauf'} comma={true} />
      </InputGroup>
    </SellForm>
  </Wrapper>
  ~~~

  `)(() => (
        <Wrapper>
          <SellForm>
            <InputGroup title={'Wieviel % Ihres Kontigents möchten Sie anbieten?'}>
              <RangeInput />
              <RangeInput value={1264} suffix={'€'} info={'Verkauf'} comma={true} />
            </InputGroup>
          </SellForm>
        </Wrapper>
      )),
)
  .add(
    'DropDown Input',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Wrapper>
        <SellForm>
          <InputGroup title={'Wieviel % Ihres Kontigents möchten Sie anbieten?'}>
            <DropDown type={'list'} value={'stunden'} />
          </InputGroup>
        </SellForm>
      </Wrapper>
      ~~~

      `)(() => (
        <Wrapper>
          <SellForm>
            <InputGroup title={'Wieviel % Ihres Kontigents möchten Sie anbieten?'}>
              <DropDown type={'list'} value={'stunden'} />
            </InputGroup>
          </SellForm>
        </Wrapper>
      )),
)
  .add(
    'Group Buttons',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <Wrapper>
        <SellForm>
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
      </Wrapper>
      ~~~

    `)(() => (
        <Wrapper>
          <SellForm>
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
        </Wrapper>
      )),
)
  .add(
    'Sell Form',
    withInfo(`
        description or documentation about my component, supports markdown

        ~~~js
        <Wrapper>
          <SellForm>
            <InputGroup title={'Wieviel % Ihres Kontigents möchten Sie anbieten?'}>
              <Slider onChange={action('changed')} />
            </InputGroup>
            <InputGroup title={'Über welchen Zeitraum ist ihr Angebot gültig?'}>
              <RangeInput />
              <DropDown type={'list'} value={'stunden'} />
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
        </Wrapper>
        ~~~

      `)(() => (
        <Wrapper>
          <SellForm>
            <InputGroup title={'Wieviel % Ihres Kontigents möchten Sie anbieten?'}>
              <Slider onChange={action('changed')} />
            </InputGroup>
            <InputGroup title={'Über welchen Zeitraum ist ihr Angebot gültig?'}>
              <RangeInput />
              <DropDown type={'list'} value={'stunden'} />
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
        </Wrapper>
      )),
);
