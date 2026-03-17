import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { Toaster } from 'react-hot-toast';

import './index.css';
import App from './App.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    <Toaster
      position="top-center"
      toastOptions={{
        className: "text-lg font-medium px-6 py-4 rounded-lg shadow-lg",
        style: {
          background: "#1f2937",
          color: "#f9fafb",
        },
      }}
    />
  </StrictMode>
);