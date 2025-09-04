import { createRoot } from 'react-dom/client'
import {BrowserRouter} from 'react-router-dom'
import './index.css'
import { QueryClient } from '@tanstack/react-query'
import { QueryClientProvider } from '@tanstack/react-query'
import App from './App.jsx'
const queryClient=new QueryClient();
createRoot(document.getElementById('root')).render(
<BrowserRouter>
 <QueryClientProvider client={queryClient}>
    <App />
  </QueryClientProvider>
 </BrowserRouter>
)