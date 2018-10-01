const express = require('express');
const joi = require('joi');

const userController = require('../userController');
const checkParams = require('../../server/models/check-params.middleware')
const User = require('../models/user')

const router = express.Router();

const handleErrorAsync = func => async (req, res, next) => {
  try {
    await func(req, res, next);
  } catch (error) {
    next(error)
  }
}

router.get('/:userId', handleErrorAsync(userController.getOneUser));
router.delete('/:userId', handleErrorAsync(userController.deleteUser));
//router.put('/:userId',  handleErrorAsync(userController.updateUser));
router.put('/:userId', checkParams.validateSequelizeEntity(User), handleErrorAsync(userController.updateUser));

router.post('/', checkParams.validateParamsJoi(joi.object().keys({
  firstName: joi.string().required(),
  lastName: joi.string(),
  phone: joi.string(),
  address: joi.string(),
})), handleErrorAsync(userController.createNewUser));

router.get('/', handleErrorAsync(userController.getAllUsers));



module.exports = router;




