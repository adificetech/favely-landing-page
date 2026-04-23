import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './styles/global.css';
import './styles/keyframes.css';

// Global theme: set `data-theme` on <body> (e.g. `document.body.dataset.theme = 'dark'`)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
);
