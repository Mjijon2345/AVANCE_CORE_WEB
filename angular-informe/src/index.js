import React from 'react';
import ReactDOM from 'react-dom/client'; // 👈 Cambia la importación
import App from './App';

// Obtener el div donde se renderiza React
const rootElement = document.getElementById('root');

// Crear el nuevo render en React 18
const root = ReactDOM.createRoot(rootElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
