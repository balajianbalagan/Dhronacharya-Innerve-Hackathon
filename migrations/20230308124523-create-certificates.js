'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Certificates', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sname: {
        type: Sequelize.STRING
      },
      cName: {
        type: Sequelize.STRING
      },
      sid: {
        type: Sequelize.INTEGER
      },
      cid: {
        type: Sequelize.INTEGER
      },
      isVerified: {
        type: Sequelize.BOOLEAN
      },
      score: {
        type: Sequelize.INTEGER
      },
      doi: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Certificates');
  }
};