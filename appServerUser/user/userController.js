
const userService = require('./services/userService');



module.exports = {
  async getAllUsers(req, res) {
    res.status(200).send(await userService.getAllUsers());
  },

  async getOneUser(req, res, next) {
    let userId = parseInt(req.params.userId);
    let user = await userService.getUserById(userId);
    if (user) {
      res.status(200).send(user);
    } else {
      res.sendStatus(404);
    }
  },

  // async getOneUser(req, res){
  //     let userId  = parseInt(req.params.userId);
  //     res.status(200).send(await userService.getUserById(userId));
  // },

  async deleteUser(req, res) {
    let userId = parseInt(req.params.userId);
    let result = await userService.deleteUserById(userId)
    result ? res.sendStatus(204):res.sendStatus(404);
  },

  async createNewUser(req, res) {
    let user = req.body;
    let result = await userService.createUser(user);
    res.status(201).send(result);

  },

  async updateUser(req, res) {
    let userId = parseInt(req.params.userId);
    let user = req.body;
    let result = await userService.updateUser(userId, user);
    res.status(200).send(result);

  }
}