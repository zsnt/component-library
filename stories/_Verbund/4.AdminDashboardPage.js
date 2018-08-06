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
  PageCard, PageCards,
  DonutChart, BarLineChart,
  Group, DropDown,
} from '../../lib';
import { ThemeDecorator } from '../Utils';

import { BarLineChartData } from './__mocks__/BarLineChartData';

storiesOf('VERBUND/Pages', module)
  .addDecorator(ThemeDecorator('verbund'))
  .add(
    '4. AdminDashboardPage',
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
          Übersicht Ihrer Aktivitäten in den letzten 30 Tagen
          <div className="info">01.01.2017 - 31.01.2017</div>
        </Headline>
        <PageCards>
          <PageCard>
            <Headline type="card-title">
              Verbrauch
              <div className="info">Anteil PV gegenüber Lieferanten</div>
            </Headline>
            <DonutChart data={[
              { name: 'Lieferant', value: 75 },
              { name: 'Photovoltaik', value: 25 },
            ]} />
          </PageCard>
          <PageCard>
            <Headline type="card-title">
              Einspeisung
              <div className="info">Rückeinspeisung in das Stromnetz</div>
            </Headline>
            <DonutChart data={[{
              name: 'Einsparung', value: 45
            }]} />
          </PageCard>
          <PageCard>
            <Headline type="card-title">
              Ersparnis
              <div className="info">Ersparnis gegenüber Lieferanten</div>
            </Headline>
            <DonutChart data={[{
              name: 'Einsparung', value: 37
            }]} />
          </PageCard>
        </PageCards>
        <PageCards>
          <PageCard width={100}>
            <Headline type="card-title">
              Wochen-Übersicht
              <div className="info">Maecenas faucibus mollis interdum.</div>
            </Headline>
            <BarLineChart data={BarLineChartData.hour} keys={{ line: 'preis' }} long showAllXAxis />
          </PageCard>
        </PageCards>
        <PageCards>
          <PageCard width={100}>
            <Headline type="card-title">
              Tages-Übersicht
              <div className="info">Maecenas faucibus mollis interdum.</div>
            </Headline>
            <BarLineChart data={BarLineChartData.date} long showAllXAxis />
          </PageCard>
        </PageCards>
        <Group>
          <DropDown type={'list'} label={'Aktiver User'} value={'Administrator'} onChange={action('changed')} />
          <DropDown type={'flat'} label={'Daten-Export'} value={'Download .CSV'} onClick={action('clicked')} />
        </Group>
        <Footer type={'default'}>
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
            Übersicht Ihrer Aktivitäten in den letzten 30 Tagen
            <div className="info">01.01.2017 - 31.01.2017</div>
          </Headline>
          <PageCards>
            <PageCard>
              <Headline type="card-title">
                Verbrauch
                <div className="info">Anteil PV gegenüber Lieferanten</div>
              </Headline>
              <DonutChart data={[
                { name: 'Lieferant', value: 75 },
                { name: 'Photovoltaik', value: 25 },
              ]} />
            </PageCard>
            <PageCard>
              <Headline type="card-title">
                Einspeisung
                <div className="info">Rückeinspeisung in das Stromnetz</div>
              </Headline>
              <DonutChart data={[{
                name: 'Einsparung', value: 45
              }]} />
            </PageCard>
            <PageCard>
              <Headline type="card-title">
                Ersparnis
                <div className="info">Ersparnis gegenüber Lieferanten</div>
              </Headline>
              <DonutChart data={[{
                name: 'Einsparung', value: 37
              }]} />
            </PageCard>
          </PageCards>
          <PageCards>
            <PageCard width={100}>
              <Headline type="card-title">
                Wochen-Übersicht
                <div className="info">Maecenas faucibus mollis interdum.</div>
              </Headline>
              <BarLineChart data={BarLineChartData.hour} keys={{ line: 'preis' }} long showAllXAxis />
            </PageCard>
          </PageCards>
          <PageCards>
            <PageCard width={100}>
              <Headline type="card-title">
                Tages-Übersicht
                <div className="info">Maecenas faucibus mollis interdum.</div>
              </Headline>
              <BarLineChart data={BarLineChartData.date} long showAllXAxis />
            </PageCard>
          </PageCards>
          <Group>
            <DropDown type={'list'} label={'Aktiver User'} value={'administrator'} onChange={action('changed')} />
            <DropDown type={'flat'} label={'Daten-Export'} value={'Download .CSV'} onClick={action('clicked')} />
          </Group>
          <Footer type={'default'}>
            <div>© VERBUND AG 2018</div>
          </Footer>
        </Wrapper>
      )),
);
