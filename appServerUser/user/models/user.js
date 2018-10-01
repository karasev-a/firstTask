const Sequelize = require('sequelize');
const db = require('../../db/models/db')

const User = db.define('user', {
    firstName: {
        type: Sequelize.STRING,
        validate: {
            notEmpty: true,
            len: [3, 15],
          },
    },
    lastName: {
        type: Sequelize.STRING,
    },
    phone: {
        type: Sequelize.STRING,
    },
    address: {
        type: Sequelize.STRING,
    },
})

module.exports = User;