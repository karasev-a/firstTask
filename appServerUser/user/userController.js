
const userService = require('./services/userService');


module.exports = {
    getAllUsers(req, res){
        //throw new Error();
        res.send(`<div>${userService.getUsersFromData()}</div>`);
    }
}