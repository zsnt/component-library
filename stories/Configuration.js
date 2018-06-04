import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
import { ThemeProvider, Layout, Header, TreeView, Diamond, NumberPicker, UserStatus } from '../lib';
import logo from './img/Logo.png';

import IconConfiguration from './img/icon_configuration.svg';
import IconRun from './img/icon_run.svg';
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
              <TreeView>
                <TreeView.Branch>
                  <TreeView.Leaf>
                    <Diamond
                      kind="large"
                      type="configuration"
                      iconUrl={IconConfiguration}
                    />
                    <TreeView.Title>
                      My Simulation #1
                    </TreeView.Title>
                  </TreeView.Leaf>
                </TreeView.Branch>
                <TreeView.Branch>
                  <TreeView.Leaf>
                    <Diamond
                      kind="medium"
                      type="run"
                      iconUrl={IconRun}
                    />
                    <TreeView.Title>
                      run simulation
                    </TreeView.Title>
                  </TreeView.Leaf>
                </TreeView.Branch>
                <TreeView.Branch>
                  <TreeView.Leaf active>
                    <Diamond
                      kind="medium"
                      type="house"
                      iconUrl={IconHouse}
                      active
                    />
                    <TreeView.Title>
                      House Profile 3
                    </TreeView.Title>
                    <NumberPicker
                      defaultValue={1}
                    />
                    <TreeView.Branch>
                      <TreeView.Leaf>
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
                      </TreeView.Leaf>
                      <TreeView.Leaf>
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
                      </TreeView.Leaf>
                      <TreeView.Leaf>
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
                      </TreeView.Leaf>
                      <TreeView.Leaf>
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
                      </TreeView.Leaf>
                      <TreeView.Leaf active>
                        <Diamond
                          kind="small"
                          type="tv"
                          iconUrl={IconTV}
                          active
                        />
                        <TreeView.Title>
                          TV
                        </TreeView.Title>
                        <NumberPicker
                          defaultValue={1}
                          inactive
                        />
                      </TreeView.Leaf>
                      <TreeView.Leaf>
                        <Diamond
                          kind="small"
                          type="plus"
                          iconUrl={IconPlus}
                        />
                        <TreeView.Title>
                          Add small
                        </TreeView.Title>
                        <NumberPicker
                          defaultValue={1}
                          inactive
                        />
                      </TreeView.Leaf>
                    </TreeView.Branch>
                  </TreeView.Leaf>
                  <TreeView.Leaf>
                    <Diamond
                      kind="medium"
                      type="house"
                      iconUrl={IconHouse}
                    />
                    <TreeView.Title>
                      House Profile 1
                    </TreeView.Title>
                    <NumberPicker
                      defaultValue={1}
                      inactive
                    />
                  </TreeView.Leaf>
                  <TreeView.Leaf>
                    <Diamond
                      kind="medium"
                      type="house"
                      iconUrl={IconHouse}
                    />
                    <TreeView.Title>
                      House Profile 1
                    </TreeView.Title>
                    <NumberPicker
                      defaultValue={1}
                      inactive
                    />
                  </TreeView.Leaf>
                  <TreeView.Leaf>
                    <Diamond
                      kind="medium"
                      type="house"
                      iconUrl={IconHouse}
                    />
                    <TreeView.Title>
                      House Profile 1
                    </TreeView.Title>
                    <NumberPicker
                      defaultValue={1}
                      inactive
                    />
                  </TreeView.Leaf>
                  <TreeView.Leaf>
                    <Diamond
                      kind="medium"
                      type="house"
                      iconUrl={IconHouse}
                    />
                    <TreeView.Title>
                      House Profile 2
                    </TreeView.Title>
                    <NumberPicker
                      defaultValue={1}
                      inactive
                    />
                  </TreeView.Leaf>
                  <TreeView.Leaf>
                    <Diamond
                      kind="medium"
                      type="celltower"
                      iconUrl={IconCelltower}
                    />
                    <TreeView.Title>
                      Cell Tower Profile
                    </TreeView.Title>
                    <NumberPicker
                      defaultValue={1}
                      inactive
                    />
                  </TreeView.Leaf>
                  <TreeView.Leaf>
                    <Diamond
                      kind="medium"
                      type="house"
                      iconUrl={IconHouse}
                    />
                    <TreeView.Title>
                      House Profile 4
                    </TreeView.Title>
                    <NumberPicker
                      defaultValue={1}
                      inactive
                    />
                  </TreeView.Leaf>
                  <TreeView.Leaf>
                    <Diamond
                      kind="medium"
                      type="generator"
                      iconUrl={IconGenerator}
                    />
                    <TreeView.Title>
                      Generator Profile 1
                    </TreeView.Title>
                    <NumberPicker
                      defaultValue={1}
                      inactive
                    />
                  </TreeView.Leaf>
                  <TreeView.Leaf>
                    <Diamond
                      kind="medium"
                      type="plus"
                      iconUrl={IconPlus}
                    />
                    <TreeView.Title>
                      Add medium Profile
                    </TreeView.Title>
                    <NumberPicker
                      defaultValue={1}
                      inactive
                    />
                  </TreeView.Leaf>
                </TreeView.Branch>
              </TreeView>
            </section>
          </Layout>
          <div className="footer">
            <a href="foo">About</a>
          </div>
        </Layout>
      </ThemeProvider>
    )),
  );
