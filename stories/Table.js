import React from 'react';
import { storiesOf } from '@storybook/react';
import { withInfo } from '@storybook/addon-info';
import { ThemeProvider, Table } from '../lib';

const divStyle = {
  background: '#003950',
  padding: '15px',
};

storiesOf('D3A/Molecules', module)
  .add(
    'Table',
    withInfo(`
      styled table
    `)(() => (
      <ThemeProvider theme="d3a">
        <div className="base" style={divStyle}>
          <Table>
            <Table.Header>
              <Table.Row>
                <Table.HeaderCell>
                  Area
                </Table.HeaderCell>
                <Table.HeaderCell>
                  kwH
                </Table.HeaderCell>
                <Table.HeaderCell>
                  €
                </Table.HeaderCell>
              </Table.Row>
            </Table.Header>
            <Table.Body>
              <Table.Row>
                <Table.HeaderCell>
                  House 1
                </Table.HeaderCell>
                <Table.Cell>
                  0.60
                </Table.Cell>
                <Table.Cell>
                  -0.12
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>
                  House 2
                </Table.HeaderCell>
                <Table.Cell>
                  1.60
                </Table.Cell>
                <Table.Cell>
                  0.12
                </Table.Cell>
              </Table.Row>
              <Table.Row>
                <Table.HeaderCell>
                  CellTower
                </Table.HeaderCell>
                <Table.Cell>
                  2.76
                </Table.Cell>
                <Table.Cell>
                  1.38
                </Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table>
        </div>
      </ThemeProvider>
    )),
  );
