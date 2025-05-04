import api from './api';

export const addAnalysis = async (analysisData) => {
  try {
    const response = await api.post('analyses', analysisData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getAnalyses = async () => {
  try {
    const response = await api.get('analyses');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
