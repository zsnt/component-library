import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
import { Button, ThemeProvider, Layout, Header, TreeView, UserStatus, Card } from '../lib';
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
                  <TreeView.Leaf
                    className="entryPoint"
                    kind="large"
                    type="configuration"
                    iconUrl={IconConfiguration}
                    title="My Simulation 1"
                  />
                </TreeView.Branch>
                <TreeView.Branch className="treeView__branch--level1">
                  <TreeView.Leaf
                    className="entryPoint"
                    kind="medium"
                    type="plus"
                    iconUrl={IconPlus}
                    title="Market #1"
                  />
                  <TreeView.Leaf
                    kind="medium"
                    type="house"
                    iconUrl={IconHouse}
                    numberPicker
                    title="My House"
                  >
                    <TreeView.Branch
                      className="treeView__branch--level3"
                    >
                      <TreeView.Leaf
                        className="entryPoint"
                        kind="small"
                        type="plus"
                        iconUrl={IconPlus}
                        title="Add"
                      />
                      <TreeView.Leaf
                        kind="small"
                        type="load"
                        iconUrl={IconLoad}
                        numberPicker
                        title="Load"
                      />
                      <TreeView.Leaf
                        kind="small"
                        type="light"
                        iconUrl={IconLight}
                        numberPicker
                        title="Lights"
                      />
                      <TreeView.Leaf
                        kind="small"
                        type="battery"
                        title="Battery Storage"
                        iconUrl={IconBattery}
                        numberPicker
                      />
                      <TreeView.Leaf
                        kind="small"
                        type="solar"
                        iconUrl={IconSolar}
                        numberPicker
                        title="solar"
                      />
                      <TreeView.Leaf
                        kind="small"
                        type="tv"
                        iconUrl={IconTV}
                        numberPicker
                        title="TS Set"
                      />
                    </TreeView.Branch>
                  </TreeView.Leaf>
                  <TreeView.Leaf
                    kind="medium"
                    type="house"
                    title="house"
                    iconUrl={IconHouse}
                    numberPicker
                  />
                  <TreeView.Leaf
                    kind="medium"
                    type="celltower"
                    iconUrl={IconCelltower}
                    title="Cell Towers"
                    numberPicker
                  />
                  <TreeView.Leaf
                    kind="medium"
                    type="generator"
                    iconUrl={IconGenerator}
                    numberPicker
                    title="Generators"
                  />
                </TreeView.Branch>
              </TreeView>
            </section>
            <section className="configurationPanel">
              <Card className="interactions">
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
