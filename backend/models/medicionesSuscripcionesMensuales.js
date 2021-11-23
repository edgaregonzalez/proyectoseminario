'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modelo extends Model {
    static associate(models) {
    }
  };
  modelo.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    email: {
      allowNull: true,
      type: DataTypes.STRING
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, { sequelize, modelName: 'medicionesSuscripcionesMensuales', updatedAt: false });
  return modelo;
};