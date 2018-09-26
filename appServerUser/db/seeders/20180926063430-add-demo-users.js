'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('users', [
      {
        firstName: 'Tom',
        lastName: 'Tomm',
        phone: '+3801234567',
        address: 'Kharkiv',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        firstName: 'Sam',
        lastName: 'Samm',
        phone: '+3801234567',
        address: 'Kharkiv',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        firstName: 'Kat',
        lastName: 'Katt',
        phone: '+3801234567',
        address: 'Kharkiv',
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    ], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {})
  }
};
