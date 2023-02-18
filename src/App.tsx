import Container from '@mui/material/Container';
import './App.css';
import TransactionTable from './features/TransactionTable';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import UploadCsv from './features/UploadCsv';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="xl" sx={{ p: '0px !important' }}>
        <UploadCsv />
        <TransactionTable />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
