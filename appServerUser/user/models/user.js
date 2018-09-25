const Sequelize = require('sequelize');
const db = require('../../db/models/db')

const User = db.define('user', {
    firstName: {
        type: Sequelize.STRING,
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