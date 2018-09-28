
const users = require('../data/usersList');
const User = require('../models/user');

module.exports = {

    async getAllUsers(){
        //console.log(User.findAll())
        return User.findAll();
    },

    async getUserById(userId){
        return Number.isInteger(userId)
        ? User.findOne({
            where: {
                id: userId,
            }
        })
        : null;
    },

    async deleteUserById(userId) {
        return Number.isInteger(userId)
        ? User.destroy({
            where: {
                id: userId,
            }
        })
        : null;
    },

    async createUser(user){
        if(user){
            return User.create(user);
        }
    },

    async updateUser(userId, user){
        if(user && Number.isInteger(userId)) {
            delete user['id'];
            let result = await User.update(user, {
                where: {
                    id: userId,
                }
            })
            return !!result[0];
        }

    }


}
