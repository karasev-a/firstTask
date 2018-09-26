const express = require('express');
const userController = require('../userController');

const router = express.Router();

router.get('/:userId', userController.getOneUser);
router.delete('/:userId', userController.deleteUser);
router.put('/:userId', userController.updateUser);

router.post('/', userController.createNewUser);

router.get('/', userController.getAllUsers);



module.exports = router;




