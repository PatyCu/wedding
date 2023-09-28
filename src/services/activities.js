import axios from 'axios';

const API_URL = 'http://localhost:3000'; // Replace with your backend API URL

const activitiesService = {
  getActivities: async () => {
    try {
      const response = await axios.get(`${API_URL}/activities/getAll`);
      return response.data;
    } catch (error) {
      console.error(error);
      throw new Error('Error getting activities');
    }
  },
};

export default activitiesService;

