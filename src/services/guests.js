import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your backend API URL

const guestsService = {
  getGuests: async () => {
    try {
      const response = await axios.get(`${API_URL}/guests/getAll`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error getting guests');
    }
  },
};

export default guestsService;

