import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';
import { getTransactions, postCsv } from '../services/TransactionService';

const columns: GridColDef[] = [
  { field: 'invoiceNo', headerName: 'Invoice No', flex: 1, },
  { field: 'stockCode', headerName: 'Stock Code', flex: 1, },
  { field: 'description', headerName: 'Description', flex: 1, },
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    flex: 1,
  },
  { field: 'invoiceDate', headerName: 'Invoice Date', flex: 1, },
  {
    field: 'unitPrice',
    headerName: 'Unit Price',
    type: 'number',
    flex: 1,
  },
  { field: 'customerID', headerName: 'Customer ID', flex: 1, },
  { field: 'country', headerName: 'Country', flex: 1, },
];

export default function TransactionTable() {
  const [data, setData] = React.useState([]);
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(30);
  const [isLoading, setIsLoading] = React.useState(false);


  return (
    <Box sx={{ height: '400px', width: '100%' }}>
      <DataGrid
        rows={data}
        rowCount={data.length}
        loading={isLoading}
        pagination
        page={page}
        pageSize={pageSize}
        paginationMode="server"
        rowsPerPageOptions={[30]}
        onPageChange={(newPage) => setPage(newPage)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        columns={columns}
      />
    </Box>
  );
}