import React from 'react';

const FiltroInforme = ({ filtro, setFiltro, pacientes }) => {
  // Obtener las enfermedades únicas
  const enfermedadesUnicas = ["Todos", ...new Set(pacientes.map(p => p.enfermedad))];

  return (
    <div className="filtro">
      <label>📋 Filtrar por enfermedad: </label>
      <select value={filtro} onChange={(e) => setFiltro(e.target.value)}>
        {enfermedadesUnicas.map((enfermedad, index) => (
          <option key={index} value={enfermedad}>{enfermedad}</option>
        ))}
      </select>
    </div>
  );
};

export default FiltroInforme;
