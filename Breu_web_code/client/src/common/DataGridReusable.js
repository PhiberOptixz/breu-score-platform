import React, { Component } from "react";
import { DataGrid } from "@mui/x-data-grid";

const DataGridReusable = ({ rows, columns }) => {
  return (
    <>
      <DataGrid
        rows={rows}
        columns={columns}
        autoHeight
        disableColumnMenu
        hideFooterSelectedRowCount
        // rowsPerPageOptions={[100]}
        // autoPageSize
        disableRowSelectionOnClick
        pagination
      />
    </>
  );
};

export default DataGridReusable;
