import React, { Component } from 'react';
import PureRenderMixin from 'react-addons-pure-render-mixin';
import { DataTable, TableHeader, TableBody, TableRow, TableColumn } from 'react-md/lib/DataTables';
import Divider from 'react-md/lib/Dividers';
import { Card, CardMedia, CardTitle, CardActions } from 'react-md/lib/Cards';
import loremIpsum from 'lorem-ipsum';

export default class PlainTableExample extends Component {
  constructor(props) {
    super(props);

    this.shouldComponentUpdate = PureRenderMixin.shouldComponentUpdate.bind(this);
  }

  render() {
    const rows = Array.apply(null, new Array(10)).map((_, i) => (
      <TableRow key={i}>
        <TableColumn>{loremIpsum({ count: 5, units: 'words' })}</TableColumn>
        <TableColumn>{loremIpsum({ count: 5, units: 'words' })}</TableColumn>
      </TableRow>
    ));

    return (
      <div className={`react-doc md-card-list`}>
        <header className="component-info text-container">
          <h1 className="md-display-1">Data Tables</h1>
          <Divider />
          Data tables display raw data sets. They usually appear in desktop enterprise products.

          The react-md data tables come in two types: plain and selectable. A plain data table will exclude just display all the data without the ability to select each row. A selectable data table will allow the selecting of rows.

          If you want to have a plain data table, you might need to update the styling for .md-table-data. It sets the height to $md-height and does not allow line wrapping. To have a multiline plain table, you will need to update the styles to be something like this:
        </header>
        <DataTable plain>
          <TableHeader>
            <TableRow>
              <TableColumn>Lorem 1</TableColumn>
              <TableColumn>Lorem 2</TableColumn>
            </TableRow>
          </TableHeader>
          <TableBody>
            {rows}
          </TableBody>
        </DataTable>
        <Card>
          <DataTable plain>
            <TableHeader>
              <TableRow>
                <TableColumn>Lorem 1</TableColumn>
                <TableColumn>Lorem 2</TableColumn>
              </TableRow>
            </TableHeader>
            <TableBody>
              {rows}
            </TableBody>
          </DataTable>
        </Card>
      </div>
    );
  }
}
