import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const GraficoResumen = ({ pacientes }) => {
  // Contar qué actividades se repiten más
  const actividadFrecuencia = {};
  pacientes.forEach((paciente) => {
    paciente.actividades.forEach((actividad) => {
      actividadFrecuencia[actividad] = (actividadFrecuencia[actividad] || 0) + 1;
    });
  });

  // Convertir el objeto en un array para el gráfico
  const data = Object.keys(actividadFrecuencia).map((actividad) => ({
    nombre: actividad,
    cantidad: actividadFrecuencia[actividad],
  }));

  return (
    <div>
      <h3>📈 Actividades Más Realizadas</h3>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={data}>
          <XAxis dataKey="nombre" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey="cantidad" fill="#8884d8" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default GraficoResumen;
