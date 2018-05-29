import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import StoryRouter from 'storybook-react-router';
import { ThemeProvider, Layout, Header, TreeView, Diamond, NumberPicker, UserStatus } from '../lib';
import logo from './img/Logo.png';

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
            <section className="tree">
              <TreeView>
                <TreeView.Branch>
                  <TreeView.Leaf>
                    <Diamond
                      kind="large"
                      type="configuration"
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
