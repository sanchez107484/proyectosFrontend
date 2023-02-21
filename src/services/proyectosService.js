import axios from 'axios';

const API_URL = 'http://localhost:4000/LISTADO'; // La URL de la API
const api = {

  createProyecto: async (proyecto) => {
    try {
      const response = await axios.post(`${API_URL}/`, proyecto);
      return response.data;
    } catch (error) {
      console.error(error);
    }
  },
  
  getProyectos: async () => {
      try {
        const response = await axios.get(`${API_URL}/`);
        return response.data;
      } catch (error) {
        console.error(error);
      }
  
  },

  updateProyecto: async (proyectoEditado) => {
    try {
      const response = await axios.put(`${API_URL}/${proyectoEditado.CROQUIS}`, {...proyectoEditado});
      return response.data;
    } catch (error) {
      console.error(error);
    }
  }
};


export default api;