import express from 'express';
import { addPatient, getPatients } from '../controllers/patientsController.js';
import { authenticateToken } from '../middleware/auth.js';

const router = express.Router();

router.post('/', authenticateToken, addPatient);  // إضافة مريض جديد
router.get('/', authenticateToken, getPatients);  // استرجاع جميع المرضى

export default router;
