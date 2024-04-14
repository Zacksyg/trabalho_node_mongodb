const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.get('/user', userController.getAllUsers);

router.post('/cadastrar', userController.createUser);

router.put('/:id', userController.updateUser); 

router.delete('/:id', userController.deleteUser);

module.exports = router;
