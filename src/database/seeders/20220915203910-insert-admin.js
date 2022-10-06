'use strict';

require('dotenv').config();

const { generateHash } = require('../../utils/auth');

module.exports = {
  async up (queryInterface, Sequelize) {
    const users = await queryInterface.sequelize.query('SELECT email FROM users WHERE email = "admin";');
    if(users[0].length == 0)
     queryInterface.bulkInsert('users', [{
        name: 'Admin',
        email: 'admin',
        password: await generateHash(process.env.ADMIN_PASSWORD),
        is_admin: 1,
      }], {});
    
  },

  async down (queryInterface, Sequelize) {

    await queryInterface.bulkDelete('users', null, {});
    
  }
};
