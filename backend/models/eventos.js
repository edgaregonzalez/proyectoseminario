'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class eventos extends Model {
  };
  eventos.init({
    id: {
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER,
      autoIncrement: true
    },
    titulo: {
      allowNull: false,
      type: DataTypes.STRING
    },
    descripcion: {
      allowNull: false,
      type: DataTypes.STRING
    },
    estado: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    }
  }, { sequelize, modelName: 'eventos', timestamps: false });
  return eventos;
};