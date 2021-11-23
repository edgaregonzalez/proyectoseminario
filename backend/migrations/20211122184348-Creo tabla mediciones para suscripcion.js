'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('medicionesSuscripcionesMensuales', { 
      id: {
        autoIncrement: true,
        primaryKey: true,
        allowNull: false,
        type: Sequelize.INTEGER
      },
      email: {
        allowNull: true,
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    }, {updatedAt: false});
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('medicionesSuscripcionesMensuales');
  }
};
