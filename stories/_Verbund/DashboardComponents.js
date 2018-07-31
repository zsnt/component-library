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
} from '../../lib';
import { ThemeDecorator } from '../Utils';

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
          <BarLineChart data={[
            { name: '01 Jan', volumen: 59, preis: 80 },
            { name: '02 Jan', volumen: 86, preis: 96 },
            { name: '03 Jan', volumen: 97, preis: 78 },
            { name: '04 Jan', volumen: 14, preis: 0 },
            { name: '05 Jan', volumen: 70, preis: 10 },
            { name: '06 Jan', volumen: 60, preis: 68 },
            { name: '07 Jan', volumen: 14, preis: 50 },
            { name: '08 Jan', volumen: 34, preis: 50 },
            { name: '09 Jan', volumen: 44, preis: 65 },
            { name: '10 Jan', volumen: 59, preis: 80 },
            { name: '11 Jan', volumen: 59, preis: 80 },
            { name: '12 Jan', volumen: 86, preis: 96 },
            { name: '13 Jan', volumen: 97, preis: 78 },
            { name: '14 Jan', volumen: 14, preis: 0 },
            { name: '15 Jan', volumen: 70, preis: 10 },
            { name: '16 Jan', volumen: 60, preis: 68 },
            { name: '17 Jan', volumen: 14, preis: 50 },
            { name: '18 Jan', volumen: 34, preis: 50 },
            { name: '19 Jan', volumen: 44, preis: 65 },
            { name: '20 Jan', volumen: 59, preis: 80 },
            { name: '21 Jan', volumen: 59, preis: 80 },
            { name: '22 Jan', volumen: 86, preis: 96 },
            { name: '23 Jan', volumen: 97, preis: 78 },
            { name: '24 Jan', volumen: 14, preis: 0 },
            { name: '25 Jan', volumen: 70, preis: 10 },
            { name: '26 Jan', volumen: 60, preis: 68 },
            { name: '27 Jan', volumen: 14, preis: 50 },
            { name: '28 Jan', volumen: 34, preis: 50 },
            { name: '29 Jan', volumen: 44, preis: 65 },
          ]} />
        </Wrapper>
      ))
  );
