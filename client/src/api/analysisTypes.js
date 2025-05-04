import api from './api';

export const addAnalysisType = async (analysisTypeData) => {
  try {
    const response = await api.post('analysisTypes', analysisTypeData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getAnalysisTypes = async () => {
  try {
    const response = await api.get('analysisTypes');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
