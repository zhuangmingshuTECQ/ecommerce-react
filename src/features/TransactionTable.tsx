import React from 'react';
import Box from '@mui/material/Box';
import { DataGrid, GridColDef, GridFilterModel } from '@mui/x-data-grid';
import { useQuery, useQueryClient } from '@tanstack/react-query';
import axios, { AxiosRequestConfig } from 'axios';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { format } from 'date-fns';
import SearchBar from '../components/SearchBar';

const columns: GridColDef[] = [
  { field: 'invoiceNo', headerName: 'Invoice No', type: 'string', flex: 1, sortable: false, filterable: false},
  { field: 'stockCode', headerName: 'Stock Code', type: 'string',  flex: 1, sortable: false, filterable: false},
  { field: 'description', headerName: 'Description', type: 'string', flex: 2.5, sortable: false, filterable: false },
  {
    field: 'quantity',
    headerName: 'Quantity',
    type: 'number',
    flex: 1,
    sortable: false
  },
  { field: 'invoiceDate', headerName: 'Invoice Date', flex: 1, minWidth: 160, sortable: false},
  {
    field: 'unitPrice',
    headerName: 'Unit Price',
    type: 'number',
    flex: 1,
    sortable: false
  },
  { field: 'customerID', headerName: 'Customer ID', flex: 1, sortable: false, filterable: false},
  { field: 'country', headerName: 'Country', flex: 1, sortable: false, filterable: false},
];

const fetchTransactions = async (params: any) => {
  const request: AxiosRequestConfig = { 
    params: params, 
    paramsSerializer: {
      indexes: null // by default: false
    }
  }
	const { data } = await axios.get('http://localhost:8080/transactions', request)

	return data;
}

export default function TransactionTable() {
  const [page, setPage] = React.useState(0);
  const [pageSize, setPageSize] = React.useState(30);
  const [params, setParams] = React.useState({
    'page': page,
    'size': pageSize,
    'query': '',
    'filter':''
  })

  const queryClient = useQueryClient()
  
  const { status, data, error, isFetching, isPreviousData } = useQuery({
    queryKey: [ 'invoices',params],
    queryFn: () =>fetchTransactions(params),
    keepPreviousData: true,
    staleTime: 5000,
  })

  // Prefetch the next page
  React.useEffect(() => {
    if (!isPreviousData && data?.hasMore) {
      queryClient.prefetchQuery({
        queryKey: ['invoices', page + 1],
        queryFn: () => fetchTransactions(params),
        initialData: () => fetchTransactions(params),
      })
    }
  }, [data, isPreviousData, page, queryClient, params])
 
  const onFilterChange = React.useCallback((filterModel: GridFilterModel) => {
    // Here you save the data you need from the filter model
    filterModel.items.forEach((item) => {
      if (!item.columnField || !item.value || !item.operatorValue) {
        return null;
      }
      let operator: string
      if (item.operatorValue === '%3C') {
        operator = '<'
      } else if (item.operatorValue === '%3E') {
        operator = '>'
      } else if (item.operatorValue === '%3D') {
        operator = '='
      }
      setParams((prev) => ({
        ...prev,
        'filter': params.filter + "," + item.columnField+operator+item.value
      }));
    })
  }, [params.filter]);


  const handleSearch = (searchTerm: string) => {
    if (searchTerm === '') {
			return;
		}
    setParams((prev) => ({
      ...prev,
      'query': searchTerm
    }));
  }

  return (
    <Box sx={{ height: '400px', width: '100%' }}>
      <SearchBar
        placeholder='Search any columns'
        handleSearch={handleSearch}
      />
      <DataGrid
        getRowId={(row: any) => row.id}
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
        pageSize={pageSize}
        paginationMode="server"
        rowCount={data ? data.totalElements : 0}
        rowsPerPageOptions={[30, 50, 100]}
        onPageChange={(newPage) => {
          setPage(newPage)
          setParams((prev) => ({
            ...prev,
            'page': newPage
          }));
        }}
        onPageSizeChange={(newPageSize) => {
          setPageSize(newPageSize)
          setParams((prev) => ({
            ...prev,
            'size': newPageSize
          }));
        }}
        columns={columns}
        filterMode='server'
        onFilterModelChange={onFilterChange}
        disableSelectionOnClick
        disableColumnSelector
      />
      <ReactQueryDevtools initialIsOpen />
    </Box>
  );
}