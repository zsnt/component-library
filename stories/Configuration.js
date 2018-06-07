import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
import { Button, ThemeProvider, Layout, Header, TreeView, Diamond, NumberPicker, UserStatus, Card } from '../lib';
import logo from './img/Logo.png';

import IconConfiguration from './img/icon_configuration.svg';
import IconPlus from './img/icon_plus.svg';
import IconGenerator from './img/icon_generator.svg';
import IconCelltower from './img/icon_celltower.svg';
import IconHouse from './img/icon_house.svg';
import IconLight from './img/icon_light.svg';
import IconBattery from './img/icon_battery.svg';
import IconLoad from './img/icon_load.svg';
import IconSolar from './img/icon_solar.svg';
import IconTV from './img/icon_tv.svg';

storiesOf('D3A/Layouts', module)
  .addDecorator(StoryRouter())
  .add(
    'Configuration Page 2',
    withInfo(`
      Just the layout of the Configuration with a dummy configuration tree

      ~~~js
      <Layout layout="configurationPage--2">Children</Layout>
      ~~~

    `)(() => (
      <ThemeProvider theme="d3a">
        <Layout layout="wrapper">
          <Header
            logoUrl={logo}
            logoLink="/"
            logoAlt="D3ASIM"
          >
            <UserStatus />
          </Header>
          <Layout layout="configurationPage--2" className="content">
            <section className="configurationTree">
              <TreeView className="treeView--left">
                <TreeView.Branch>
                  <TreeView.Leaf className="entryPoint">
                    <TreeView.Content>
                      <Diamond
                        kind="large"
                        type="configuration"
                        iconUrl={IconConfiguration}
                      />
                      <TreeView.Title>
                        My Simulation #1
                      </TreeView.Title>
                    </TreeView.Content>
                  </TreeView.Leaf>
                </TreeView.Branch>
                <TreeView.Branch className="treeView__branch--level1">
                  <TreeView.Leaf className="entryPoint">
                    <TreeView.Content>
                      <Diamond
                        kind="medium"
                        type="plus"
                        iconUrl={IconPlus}
                      />
                      <TreeView.Title>
                        Market #1
                      </TreeView.Title>
                    </TreeView.Content>
                  </TreeView.Leaf>
                  <TreeView.Leaf active>
                    <TreeView.Content>
                      <Diamond
                        kind="medium"
                        type="house"
                        iconUrl={IconHouse}
                        active
                      />
                      <TreeView.Title>
                        Residential
                      </TreeView.Title>
                      <NumberPicker
                        defaultValue={1}
                      />
                    </TreeView.Content>
                    <TreeView.Branch className="treeView__branch--level3">
                      <TreeView.Leaf className="entryPoint">
                        <TreeView.Content>
                          <Diamond
                            kind="small"
                            type="plus"
                            iconUrl={IconPlus}
                          />
                          <TreeView.Title>
                            Market #3
                          </TreeView.Title>
                        </TreeView.Content>
                      </TreeView.Leaf>
                      <TreeView.Leaf>
                        <TreeView.Content>
                          <Diamond
                            kind="small"
                            type="load"
                            iconUrl={IconLoad}
                          />
                          <TreeView.Title>
                            Load
                          </TreeView.Title>
                          <NumberPicker
                            defaultValue={1}
                            inactive
                          />
                        </TreeView.Content>
                      </TreeView.Leaf>
                      <TreeView.Leaf>
                        <TreeView.Content>
                          <Diamond
                            kind="small"
                            type="light"
                            iconUrl={IconLight}
                          />
                          <TreeView.Title>
                            Light
                          </TreeView.Title>
                          <NumberPicker
                            defaultValue={1}
                            inactive
                          />
                        </TreeView.Content>
                      </TreeView.Leaf>
                      <TreeView.Leaf>
                        <TreeView.Content>
                          <Diamond
                            kind="small"
                            type="battery"
                            iconUrl={IconBattery}
                          />
                          <TreeView.Title>
                            Battery
                          </TreeView.Title>
                          <NumberPicker
                            defaultValue={1}
                            inactive
                          />
                        </TreeView.Content>
                      </TreeView.Leaf>
                      <TreeView.Leaf>
                        <TreeView.Content>
                          <Diamond
                            kind="small"
                            type="solar"
                            iconUrl={IconSolar}
                          />
                          <TreeView.Title>
                            Solar
                          </TreeView.Title>
                          <NumberPicker
                            defaultValue={1}
                            inactive
                          />
                        </TreeView.Content>
                      </TreeView.Leaf>
                      <TreeView.Leaf active>
                        <TreeView.Content>
                          <Diamond
                            kind="small"
                            type="tv"
                            active
                            iconUrl={IconTV}
                          />
                          <TreeView.Title>
                            TV
                          </TreeView.Title>
                          <NumberPicker
                            defaultValue={1}
                            inactive
                          />
                        </TreeView.Content>
                      </TreeView.Leaf>
                    </TreeView.Branch>
                  </TreeView.Leaf>
                  <TreeView.Leaf>
                    <TreeView.Content>
                      <Diamond
                        kind="medium"
                        type="house"
                        iconUrl={IconHouse}
                      />
                      <TreeView.Title>
                        Commercial
                      </TreeView.Title>
                      <NumberPicker
                        defaultValue={1}
                        inactive
                      />
                    </TreeView.Content>
                  </TreeView.Leaf>
                  <TreeView.Leaf>
                    <TreeView.Content>
                      <Diamond
                        kind="medium"
                        type="celltower"
                        iconUrl={IconCelltower}
                      />
                      <TreeView.Title>
                        Industrial
                      </TreeView.Title>
                      <NumberPicker
                        defaultValue={1}
                        inactive
                      />
                    </TreeView.Content>
                  </TreeView.Leaf>
                  <TreeView.Leaf>
                    <TreeView.Content>
                      <Diamond
                        kind="medium"
                        type="generator"
                        iconUrl={IconGenerator}
                      />
                      <TreeView.Title>
                        Generators
                      </TreeView.Title>
                      <NumberPicker
                        defaultValue={1}
                        inactive
                      />
                    </TreeView.Content>
                  </TreeView.Leaf>
                </TreeView.Branch>
              </TreeView>
            </section>
            <section className="configurationPanel">
              <Card>
                <Button label="start" />
                <Button label="save" />
              </Card>
            </section>
          </Layout>
          <div className="footer">
            <a href="foo">About</a>
          </div>
        </Layout>
      </ThemeProvider>
    )),
  );
