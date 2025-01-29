import axios from 'axios';

// URL base de la API de Angular
const BASE_URL = 'http://localhost:4200/api/activity';

const ActividadService = {
  getAllActivities: async () => {
    try {
      const response = await axios.get(`${BASE_URL}/index`);
      return response.data;
    } catch (error) {
      console.error('Error obteniendo actividades:', error);
      return [];
    }
  },
};

export default ActividadService;
