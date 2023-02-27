import axios from 'axios';

const API_URL = 'http://localhost:4000/LISTADO/login'; // La URL de la API
const api = {

  login: async (userLogin) => {
    try {
      const response = await axios.post(`${API_URL}/`, userLogin);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
};


export default api;