import './App.css';
import Home  from './Pages/Home';
import { QueryClientProvider } from 'react-query';
import { queryClientConfig } from './Config/queryClientConfig';

function App() {
  return (
    <>
    <QueryClientProvider client={queryClientConfig}>

      <Home/>
    </QueryClientProvider>
    </>
  );
}

export default App;
