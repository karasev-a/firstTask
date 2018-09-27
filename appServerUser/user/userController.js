
const userService = require('./services/userService');

const handleErrorAsync = func => async (req, res, next) => {
    try {
        await func(req, res, next);
    } catch (error) {
        next(error)
    }
}


// class UserModelError extends Error {

//     constructor(message, status = 500) {
//         super(message);
//         this.status = status;
//     }

// }

// throw new UserModelError('not valid model', 400)


module.exports = {
    async getAllUsers(req, res) {
        res.status(200).send(await userService.getAllUsers());
    },

    async getOneUser(req, res, next){
        let userId  = parseInt(req.params.userId);
        try {
            let user = await userService.getUserById(userId);
            res.status(200).send(user);
        } catch (error) {
            //res.status(404).send('404: not found');
            next(error);
        }
        
    },

    // async getOneUser(req, res){
    //     let userId  = parseInt(req.params.userId);
    //     res.status(200).send(await userService.getUserById(userId));
    // },

    async deleteUser(req, res){
        let userId  = parseInt(req.params.userId);
        let result = await userService.deleteUserById(userId)
        res.sendStatus(204);
    },

    async createNewUser(req, res){
        let user = req.body;
        let result = await userService.createUser(user);
        res.status(201).send(result);

    },

    async updateUser(req, res){
        let userId  = parseInt(req.params.userId);
        let user = req.body;
        let result = await userService.updateUser(userId, user);
        res.status(200).send(result);

    }
}