import React from 'react';
import Informe from './components/Informe';
import './styles.css'; // 👈 Importamos los estilos CSS

function App() {
  return (
    <div className="App">
      <h1>📄 Reporte de Actividades para Pacientes</h1>
      <Informe />
    </div>
  );
}

export default App;
