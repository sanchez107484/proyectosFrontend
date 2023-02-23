import axios from 'axios';

const API_URL = 'http://localhost:4000/LISTADO'; // La URL de la API
const api = {

  login: async (proyecto) => {
    try {
      const response = await axios.post(`${API_URL}/`, proyecto);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};


export default api;