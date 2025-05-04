import api from './api';

export const addPatient = async (patientData) => {
  try {
    const response = await api.post('patients', patientData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const getPatients = async () => {
  try {
    const response = await api.get('patients');
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};

export const editPatient = async (patientId, patientData) => {
  try {
    const response = await api.put(`patients/${patientId}`, patientData);
    return response.data;
  } catch (error) {
    throw error.response ? error.response.data : error.message;
  }
};
