const express = require('express');
const userController = require('../userController');

const router = express.Router();

router.get('/api/v1/users', userController.getAllUsers);

module.exports = router;




