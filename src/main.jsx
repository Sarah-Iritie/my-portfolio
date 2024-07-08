import ReactDOM from 'react-dom/client';
import App from '@/components/App/App';
import './styles/index.scss';
import { DarkModeProvider } from './components/DarkModeContext/DarkModeContext';

ReactDOM.createRoot(document.getElementById('root')).render(
  <DarkModeProvider>
    <App />
  </DarkModeProvider>
);
