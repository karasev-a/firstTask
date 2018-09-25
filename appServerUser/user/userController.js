
const userService = require('./services/userService');


module.exports = {
    getAllUsers(req, res) {
        //throw new Error();
        res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
        res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
        res.header('access-Control-Allow-Origin', '*');
        res.status(200).send(userService.getUsersFromData());
    }
}