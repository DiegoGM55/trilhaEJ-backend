'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    
    await queryInterface.createTable('users', { 
      
      id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        allowNull: false,
        autoIncrement: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: false,
      },
      cpf: {
        type: Sequelize.STRING(14),
        allowNull: true,
        unique: true,
      },
      zip_code: {
        type: Sequelize.STRING(8),
        allowNull: true,
      },
      is_admin: {
        type: Sequelize.TINYINT,
        allowNull: false,
        defaultValue: 0,
      },
      created_at: {
        type: Sequelize.DATE,
        allowNull: false,
        defaultValue: new Date(),
      }

    });
     
  },

  async down (queryInterface, Sequelize) {
    
    await queryInterface.dropTable('users');
    
  }
};
