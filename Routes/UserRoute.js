const express = require('express')
const userRouter = express();
const UserController = require('../Controllers/UserController')

userRouter.post('/register', UserController.Register)
userRouter.post('/login', UserController.login)

module.exports = userRouter