// from here: https://devexpress.github.io/devextreme-reactive/react/grid/docs/guides/summary-row/

import React, { useState } from "react";
import Paper from "@material-ui/core/Paper";
import Chip from "@material-ui/core/Chip";
import Input from "@material-ui/core/Input";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import {
  DataTypeProvider,
  EditingState,
  SortingState,
  IntegratedSorting,
  PagingState,
  IntegratedPaging,
  SummaryState,
  IntegratedSummary
} from "@devexpress/dx-react-grid";
import {
  Grid,
  Table,
  TableHeaderRow,
  TableEditRow,
  TableEditColumn,
  PagingPanel,
  VirtualTable,
  TableSummaryRow
} from "@devexpress/dx-react-grid-material-ui";

const getRowId = row => row.id;

const CurrencyFormatter = ({ value }) =>
  value.toLocaleString("en-US", { style: "currency", currency: "GBP" });

const CurrencyTypeProvider = props => (
  <DataTypeProvider formatterComponent={CurrencyFormatter} {...props} />
);

const BooleanFormatter = ({ value }) => <Chip label={value ? "Yes" : "No"} />;

const BooleanEditor = ({ value, onValueChange }) => (
  <Select
    input={<Input />}
    value={value ? "Yes" : "No"}
    onChange={event => onValueChange(event.target.value === "Yes")}
    style={{ width: "100%" }}
  >
    <MenuItem value="Yes">Yes</MenuItem>
    <MenuItem value="No">No</MenuItem>
  </Select>
);

const BooleanTypeProvider = props => (
  <DataTypeProvider
    formatterComponent={BooleanFormatter}
    editorComponent={BooleanEditor}
    {...props}
  />
);

export default () => {
  const [columns] = useState([
    { name: "phase", title: "Phase" },
    { name: "name", title: "Description" },
    { name: "start", title: "Start date" },
    { name: "end", title: "End date" },
    { name: "dep", title: "Deposit" },
    { name: "cost", title: "Cost" },
    { name: "shipped", title: "Shipped" } //this is just to show how binary works
  ]);
  const [rows, setRows] = useState([
    {
      phase: "1",
      name: "Setup",
      start: "3 March 2020",
      end: "10 March 2020",
      dep: 300,
      cost: 3000
    },
    {
      phase: "2",
      name: "Structure",
      start: "12 March 2020",
      end: "24 March 2020",
      dep: 300,
      cost: 2500
    },
    {
      phase: "3",
      name: "Interior",
      start: "22 March 2020",
      end: "30 March 2020",
      dep: 700,
      cost: 5000
    },
    {
      phase: "4",
      name: "Decorating",
      start: "3 April 2020",
      end: "10 April 2020",
      dep: 300,
      cost: 2500
    }
  ]);
  const [tableColumnExtensions] = useState([
    { columnName: "cost", align: "right" }
  ]);
  const [totalSummaryItems] = useState([
    { columnName: "cost", type: "avg" },
    { columnName: "cost", type: "sum" },
    { columnName: "dep", type: "sum" }
  ]);

  const [currencyColumns] = useState(["dep", "cost"]);

  const [booleanColumns] = useState(["shipped"]);

  const commitChanges = ({ added, changed, deleted }) => {
    let changedRows;
    if (added) {
      const startingAddedId =
        rows.length > 0 ? rows[rows.length - 1].id + 1 : 0;
      changedRows = [
        ...rows,
        ...added.map((row, index) => ({
          id: startingAddedId + index,
          ...row
        }))
      ];
    }
    if (changed) {
      changedRows = rows.map(row =>
        changed[row.id] ? { ...row, ...changed[row.id] } : row
      );
    }
    if (deleted) {
      const deletedSet = new Set(deleted);
      changedRows = rows.filter(row => !deletedSet.has(row.id));
    }
    setRows(changedRows);
  };

  return (
    <Paper>
      <Grid rows={rows} columns={columns} getRowId={getRowId}>
        <BooleanTypeProvider for={booleanColumns} />
        <SortingState />
        <IntegratedSorting />
        <PagingState defaultCurrentPage={0} pageSize={12} />
        <IntegratedPaging />
        <PagingPanel />
        <EditingState
          onCommitChanges={commitChanges}
          defaultEditingRowIds={[0]}
        />
        <CurrencyTypeProvider for={currencyColumns} />
        <SummaryState totalItems={totalSummaryItems} />
        <IntegratedSummary />
        <Table />
        <VirtualTable />
        <TableHeaderRow showSortingControls />
        <TableSummaryRow />
        <TableEditRow />
        <TableEditColumn showEditCommand showDeleteCommand showAddCommand />
      </Grid>
    </Paper>
  );
};
