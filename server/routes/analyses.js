import express from 'express';
import { addAnalysis, getAnalyses } from '../controllers/analysisController.js';

const router = express.Router();

router.post('/', addAnalysis);  // إضافة تحليل جديد
router.get('/', getAnalyses);   // استرجاع جميع التحاليل

export default router;
