import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './styles/global.css';

try {
  const redirect = sessionStorage.getItem('zemyx-redirect');
  if (redirect && redirect !== '/404.html') {
    sessionStorage.removeItem('zemyx-redirect');
    window.history.replaceState(null, '', redirect);
  }
} catch {
  // ignore
}

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
