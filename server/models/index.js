import sequelize from '../config/db.js';
import User from './User.js';
import Patient from './Patient.js';
import Analysis from './Analysis.js';

User.hasMany(Patient);
Patient.belongsTo(User);

Patient.hasMany(Analysis);
Analysis.belongsTo(Patient);

export { sequelize, User, Patient, Analysis };
