const { DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const User = require('./User');

const Note = sequelize.define('Note', {
  title: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  content: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  tags: {
    type: DataTypes.STRING,
    get() {
      return this.getDataValue('tags') ? this.getDataValue('tags').split(';') : [];
    },
    set(tags) {
      this.setDataValue('tags', tags.join(';'));
    },
  },
});

Note.belongsTo(User, { foreignKey: 'userId' });

module.exports = Note;
