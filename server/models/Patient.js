import { DataTypes } from 'sequelize';
// models/Patient.js
import sequelize from '../config/db.js';




const Patient = sequelize.define('Patient', {
  name: DataTypes.STRING,
  age: DataTypes.INTEGER,
  gender: DataTypes.STRING,
});

export default Patient;
