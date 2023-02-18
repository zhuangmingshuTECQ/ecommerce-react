import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios from 'axios';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { Button, TextField } from '@mui/material';
import { format } from 'date-fns';

const columns: GridColDef[] = [
  { field: 'invoiceNo', headerName: 'Invoice No', type: 'string', flex: 1, },
  { field: 'stockCode', headerName: 'Stock Code', type: 'string',  flex: 1, },
  { field: 'description', headerName: 'Description', type: 'string', flex: 2.5  , },
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    flex: 1,
  },
  { field: 'invoiceDate', headerName: 'Invoice Date', flex: 1, minWidth: 160, },
  {
    field: 'unitPrice',
    headerName: 'Unit Price',
    type: 'currency',
    flex: 1,
  },
  { field: 'customerID', headerName: 'Customer ID', flex: 1, },
  { field: 'country', headerName: 'Country', flex: 1, },
];

const fetchTransactions = async (page = 0) => {
	const { data } = await axios.get('http://localhost:8080/transactions?page=' + page)
  data.invoices[0].invoiceDate.toString()
	return data;
}

export default function TransactionTable() {
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(30);

  const queryClient = useQueryClient()
  
  const { status, data, error, isFetching, isPreviousData } = useQuery({
    queryKey: [ 'invoices',{page}],
    queryFn: () =>fetchTransactions(page),
    keepPreviousData: true,
    staleTime: 5,
  })

  // Prefetch the next page
  React.useEffect(() => {
    if (!isPreviousData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ['invoices', page + 1],
        queryFn: () => fetchTransactions(page + 1),
        initialData: () => fetchTransactions(1),
      })
    }
  }, [data, isPreviousData, page, queryClient])

  const [searchValue, setSearchValue] = React.useState()

  // const getRequestParams = (page: number) => {
  //   let params = {};

  //   if (page) {
  //     params['page'] = page
  //   } 

  //   return params;
  // };

  return (
    <Box sx={{ height: '400px', width: '100%' }}>
      <DataGrid
        getRowId={(row: any) => row.description}
        rows={data ? data.invoices.map((x: any , index: any) => (
          {
            id: index,
            invoiceNo: x.invoiceNo,
            stockCode: x.stockCode,
            description: x.description,
            quantity: x.quantity,
            invoiceDate: x ? format(new Date(x.invoiceDate.toString()),'dd-MMM-yy hh:mm a') : null,
            unitPrice: '$'+x.unitPrice.toFixed(2),
            customerID: x.customerID,
            country: x.country,
          }
        )) : []}
        loading={isFetching}
        pagination
        page={page}
        pageSize={pageSize} // todo allow selecting multiple sizes
        paginationMode="server"
        rowCount={data ? data.totalElements : 0}
        rowsPerPageOptions={[30]}
        onPageChange={(newPage) => setPage(newPage)}
        onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
        columns={columns}
        disableSelectionOnClick
      />
      <ReactQueryDevtools initialIsOpen />
    </Box>
  );
}