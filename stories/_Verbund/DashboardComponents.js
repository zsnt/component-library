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
  Icon, Icons,
  PageCard, PageCards, PageCardBox, PageCardItem,
  DonutChart, BarLineChart,
  Group, DropDown,
} from '../../lib';
import { ThemeDecorator } from '../Utils';

import { BarLineChartData } from './__mocks__/BarLineChartData';

storiesOf('VERBUND/Components/Dashboard', module)
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
    'Page Card Item',
    withInfo(`
      description or documentation about my component, supports markdown

      ~~~js
      <PageCardItem value={'1.200'}>
        <Headline type="card-title">
          Ihr Kontigent<img src={Icons.infoCircle} />
          <div className="info">Ihr aktuell verbleibendes Kontingent</div>
        </Headline>
      </PageCardItem>
      ~~~

    `)(() => (
        <Wrapper>
          <PageCardItem value={'1.200'}>
            <Headline type="card-title">
              Ihr Kontigent<img src={Icons.infoCircle} />
              <div className="info">Ihr aktuell verbleibendes Kontingent</div>
            </Headline>
          </PageCardItem>
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
            <PageCardItem value={'1.900'}>
              <Headline type="card-title">
                IhrPV-Anteil<img src={Icons.infoCircle} />
                <div className="info">Ohne Handel verfügbare Menge an PV Energie</div>
              </Headline>
            </PageCardItem>
            <PageCardItem value={450}>
              <Headline type="card-title">
                Ihr Verbrauch<img src={Icons.infoCircle} />
                <div className="info">Ihr tatsächlicher PV-Energie Konsum</div>
              </Headline>
            </PageCardItem>
            <PageCardItem value={'1.200'}>
              <Headline type="card-title">
                Ihr Kontigent<img src={Icons.infoCircle} />
                <div className="info">Ihr aktuell verbleibendes Kontingent</div>
              </Headline>
            </PageCardItem>
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
              <PageCardItem value={'1.900'}>
                <Headline type="card-title">
                  IhrPV-Anteil<img src={Icons.infoCircle} />
                  <div className="info">Ohne Handel verfügbare Menge an PV Energie</div>
                </Headline>
              </PageCardItem>
              <PageCardItem value={450}>
                <Headline type="card-title">
                  Ihr Verbrauch<img src={Icons.infoCircle} />
                  <div className="info">Ihr tatsächlicher PV-Energie Konsum</div>
                </Headline>
              </PageCardItem>
              <PageCardItem value={'1.200'}>
                <Headline type="card-title">
                  Ihr Kontigent<img src={Icons.infoCircle} />
                  <div className="info">Ihr aktuell verbleibendes Kontingent</div>
                </Headline>
              </PageCardItem>
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
  )
  .add(
    'Group',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <Wrapper>
          <Group>
            <DropDown type={'list'} label={'Aktiver User'} value={'administrator'} />
            <DropDown type={'flat'} label={'Daten-Export'} value={'Download .CSV'} />
          </Group>
        </Wrapper>
        ~~~
  
      `)(() => (
        <Wrapper>
          <Group>
            <DropDown type={'list'} label={'Aktiver User'} value={'administrator'} />
            <DropDown type={'flat'} label={'Daten-Export'} value={'Download .CSV'} />
          </Group>
        </Wrapper>
      ))
  );

storiesOf('VERBUND/Components/Dashboard/Charts', module)
  .addDecorator(ThemeDecorator('verbund'))
  .add(
    'Donut',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <Wrapper>
          <DonutChart data={[
            { name: 'Lieferant', value: 75 },
            { name: 'Photovoltaik', value: 25 },
          ]} />
          <DonutChart data={[{
            name: 'Einsparung', value: 45
          }]} />
        </Wrapper>
        ~~~
  
      `)(() => (
        <Wrapper>
          <DonutChart data={[
            { name: 'Lieferant', value: 75 },
            { name: 'Photovoltaik', value: 25 },
          ]} />
          <DonutChart data={[{
            name: 'Einsparung', value: 45
          }]} />
        </Wrapper>
      ))
  )
  .add(
    'BarLine',
    withInfo(`
        description or documentation about my component, supports markdown
  
        ~~~js
        <Wrapper>
          <BarLineChart data={BarLineChartData.date} />
        </Wrapper>
        ~~~
  
      `)(() => (
        <Wrapper>
          <BarLineChart data={BarLineChartData.date} />
        </Wrapper>
      ))
  );
