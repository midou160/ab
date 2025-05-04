import Analysis from '../models/Analysis.js';

export const addAnalysis = async (req, res) => {
  const { type, date, patientId } = req.body;
  try {
    const newAnalysis = await Analysis.create({ type, date, patientId });
    res.status(201).json(newAnalysis);
  } catch (error) {
    res.status(400).json({ message: 'Failed to add analysis.' });
  }
};

export const getAnalyses = async (req, res) => {
  try {
    const analyses = await Analysis.findAll();
    res.status(200).json(analyses);
  } catch (error) {
    res.status(400).json({ message: 'Failed to retrieve analyses.' });
  }
};
