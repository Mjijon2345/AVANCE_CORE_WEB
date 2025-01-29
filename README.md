📊 Sistema de Gestión de Huéspedes y Actividades en Asilos

🚀 Descripción del Proyecto

Este sistema permite gestionar huéspedes, trabajadores y visitas en un asilo, asociando enfermedades con actividades recomendadas. Se implementó con React (frontend) y Angular (backend), permitiendo la generación de informes y visualización de estadísticas en tiempo real.

📌 Características Principales

✅ Registro de huéspedes con cédula, nombre, apellido y enfermedad.
✅ Asociación de actividades recomendadas según la enfermedad.
✅ Generación de informes en PDF y Excel.
✅ Visualización de datos con gráficos interactivos.
✅Filtros por enfermedad para análisis de tendencias.
✅ Implementación de principios SOLID y patrones de diseño para un código limpio y escalable.

🛠️ Tecnologías Utilizadas

Frontend: React, Recharts 

Backend: Angular, Node.js

Base de Datos: SQL

Estilos: CSS 

Exportación de Informes: jsPDF, xlsx

Control de Versiones: GitHub

📥 Instalación y Configuración

🔹 2. Configurar el Backend (Angular)

cd backend
npm install
ng serve

🔹 3. Configurar el Frontend (React)

cd ../frontend
npm install
npm start

🧪 Pruebas Funcionales

✅ Prueba 1: Registro de Huéspedes

Ingresar datos del huésped.

Seleccionar enfermedad y actividades recomendadas.

Guardar y verificar en la lista.

✅ Prueba 2: Generacion de Informe 

Se genera un informe general, donde se puede filtrar por enfermedad

📌 Mejoras con SOLID y Patrones de Diseño

✅ SRP (Principio de Responsabilidad Única): Separación de la lógica de datos y UI.
✅ DIP (Principio de Inversión de Dependencias): Uso de interfaces en la API.
✅Patrón Factory: Creación de objetos pacientes y actividades.
✅ Patrón Observer: Notificaciones de nuevos registros.
