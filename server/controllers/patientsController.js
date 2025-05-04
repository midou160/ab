import Patient from '../models/Patient.js';

export const addPatient = async (req, res) => {
  const { name, birthDate } = req.body;
  try {
    const newPatient = await Patient.create({ name, birthDate });
    res.status(201).json(newPatient);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add patient.' });
  }
};

export const getPatients = async (req, res) => {
  try {
    const patients = await Patient.findAll();
    res.status(200).json(patients);
  } catch (error) {
    res.status(400).json({ message: 'Failed to retrieve patients.' });
  }
};
