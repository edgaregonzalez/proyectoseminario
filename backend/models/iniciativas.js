'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class modelo extends Model {
    static associate(models) {
      modelo.belongsTo(models.organizaciones, { as: 'organizacionDetalle', foreignKey: 'organizacion' })
      modelo.belongsTo(models.eventos, { as: 'eventoDetalle', foreignKey: 'evento' })
    }
  };
  modelo.init({
    id: {
      autoIncrement: true,
      primaryKey: true,
      allowNull: false,
      type: DataTypes.INTEGER
    },
    titulo: {
      allowNull: false,
      type: DataTypes.STRING
    },
    descripcion: {
      allowNull: false,
      type: DataTypes.STRING
    },
    aprobacion: {
      allowNull: false,
      type: DataTypes.BOOLEAN
    },
    organizacion: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    evento: {
      allowNull: false,
      type: DataTypes.INTEGER
    },
    createdAt: {
      allowNull: false,
      type: DataTypes.DATE
    }
  }, { sequelize, modelName: 'iniciativas', timestamps: false });
  return modelo;
};