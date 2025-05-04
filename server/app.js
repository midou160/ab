import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import sequelize from './config/db.js'; // ✅ صحيح

import authRoutes from './routes/auth.js';
import patientRoutes from './routes/patients.js';
import analysisRoutes from './routes/analyses.js';  // تأكد من أن هذا المسار صحيح



dotenv.config();

const app = express();

// Middlewares
app.use(cors());
app.use(bodyParser.json());

app.use('/api/auth', authRoutes);   // تأكد من أن المسار هنا هو authRoutes وليس auth
app.use('/api/patients', patientRoutes);  // تأكد من أن المسار هنا هو patientRoutes
app.use('/api/analyses', analysisRoutes);  // تأكد من أن المسار هنا هو analysisRoutes

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  sequelize.sync({ force: false }).then(() => {
    console.log('Database synced');
  });
});
