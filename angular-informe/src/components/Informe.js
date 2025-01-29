import React, { useState } from 'react';
import GraficoResumen from './GraficoResumen';
import FiltroInforme from './FiltroInforme';

const Informe = () => {
  // Datos de pacientes precreados con más enfermedades y actividades
  const pacientesPrecreados = [
    { id: 1, paciente: "Juan Pérez", enfermedad: "Alzheimer", actividades: ["Juegos de memoria", "Lectura guiada"] },
    { id: 2, paciente: "María López", enfermedad: "Parkinson", actividades: ["Ejercicios de motricidad", "Música relajante"] },
    { id: 3, paciente: "Pedro García", enfermedad: "Alzheimer", actividades: ["Juegos de memoria", "Caminar en el parque"] },
    { id: 4, paciente: "Ana Torres", enfermedad: "Demencia Senil", actividades: ["Terapia de arte", "Ejercicios cognitivos"] },
    { id: 5, paciente: "Luis Fernández", enfermedad: "Parkinson", actividades: ["Ejercicios de motricidad", "Pintura terapéutica"] },
    { id: 6, paciente: "Carmen Delgado", enfermedad: "Alzheimer", actividades: ["Caminar en el parque", "Música relajante"] },
    { id: 7, paciente: "José Ramírez", enfermedad: "Demencia Senil", actividades: ["Terapia con mascotas", "Lectura guiada"] },
    { id: 8, paciente: "Sofía Herrera", enfermedad: "Alzheimer", actividades: ["Juegos de memoria", "Terapia de arte"] },
    { id: 9, paciente: "Roberto Medina", enfermedad: "Esclerosis Múltiple", actividades: ["Fisioterapia", "Ejercicios de equilibrio"] },
    { id: 10, paciente: "Elena Castillo", enfermedad: "Esquizofrenia", actividades: ["Terapia de grupo", "Música relajante"] },
    { id: 11, paciente: "Miguel Álvarez", enfermedad: "Depresión", actividades: ["Ejercicio físico", "Terapia cognitiva"] },
    { id: 12, paciente: "Carla Ríos", enfermedad: "Ansiedad", actividades: ["Meditación guiada", "Ejercicio de respiración"] },
    { id: 13, paciente: "Fernando López", enfermedad: "Trastorno Bipolar", actividades: ["Música terapéutica", "Journaling"] },
    { id: 14, paciente: "Patricia Vega", enfermedad: "Demencia Senil", actividades: ["Caminatas asistidas", "Terapia con animales"] },
    { id: 15, paciente: "Ricardo Ortega", enfermedad: "Parkinson", actividades: ["Tai Chi", "Pintura terapéutica"] },
    { id: 16, paciente: "Mónica Espinoza", enfermedad: "Alzheimer", actividades: ["Ejercicios de memoria", "Dibujo guiado"] },
    { id: 17, paciente: "Héctor Ruiz", enfermedad: "Trastorno Obsesivo-Compulsivo", actividades: ["Terapia de exposición", "Técnicas de relajación"] },
    { id: 18, paciente: "Andrea Jiménez", enfermedad: "Esclerosis Múltiple", actividades: ["Rehabilitación física", "Yoga"] },
    { id: 19, paciente: "Gonzalo Martínez", enfermedad: "Depresión", actividades: ["Terapia de grupo", "Caminatas al aire libre"] },
    { id: 20, paciente: "Silvia Arévalo", enfermedad: "Ansiedad", actividades: ["Técnicas de respiración", "Terapia ocupacional"] }
  ];

  // Estado para almacenar los datos filtrados
  const [filtro, setFiltro] = useState("Todos");

  // Filtrar los pacientes según la enfermedad seleccionada
  const pacientesFiltrados = filtro === "Todos"
    ? pacientesPrecreados
    : pacientesPrecreados.filter((p) => p.enfermedad === filtro);

  return (
    <div className="contenedor">
      <h2>📊 Informe de Pacientes y Actividades</h2>

      {/* Componente de filtro */}
      <FiltroInforme filtro={filtro} setFiltro={setFiltro} pacientes={pacientesPrecreados} />

      <h3>📝 Lista de Pacientes</h3>
      <ul className="lista">
        {pacientesFiltrados.map((paciente) => (
          <li key={paciente.id} className="tarjeta">
            <strong>{paciente.paciente}</strong> - <em>{paciente.enfermedad}</em>
            <br />
            Actividades: {paciente.actividades.join(", ")}
          </li>
        ))}
      </ul>

      {/* Gráfico de actividades más realizadas */}
      <GraficoResumen pacientes={pacientesFiltrados} />
    </div>
  );
};

export default Informe;
