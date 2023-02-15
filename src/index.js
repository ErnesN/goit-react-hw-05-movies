import React from 'react';
import ReactDOM from 'react-dom/client';
import Navbar from 'components/modules/Navbars/Navbar';
import { App } from 'components/App';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Navbar />
    <App />
  </React.StrictMode>
);