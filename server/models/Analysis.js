import { DataTypes } from 'sequelize';
import sequelize from '../config/db.js';

const Analysis = sequelize.define('Analysis', {
  type: DataTypes.STRING,
  result: DataTypes.STRING,
});

export default Analysis;
