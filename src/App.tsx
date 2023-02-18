import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import './App.css';
import TransactionTable from './features/TransactionTable';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import SearchField from './features/SearchField';

function App() {
  const queryClient = new QueryClient()

  return (
    <QueryClientProvider client={queryClient}>
      <Container maxWidth="xl" sx={{ p: '0px !important' }}>
        {/* <SearchField /> */}
        <TransactionTable />
      </Container>
    </QueryClientProvider>
  );
}

export default App;
