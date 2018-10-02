'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    let tableDefinition = await queryInterface.describeTable('users');

    if(!tableDefinition.phone){
      return queryInterface.addColumn('users', 'phone', {
      type: Sequelize.STRING
    })}
    
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.removeColumn('users', 'phone')
  }
};
