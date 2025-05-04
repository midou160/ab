// models/User.js
import { DataTypes } from 'sequelize';
// ✅ صحيح
import sequelize from '../config/db.js';


const User = sequelize.define('User', {
  username: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export { User }; // تأكد من أن التصدير يتم بهذا الشكل
