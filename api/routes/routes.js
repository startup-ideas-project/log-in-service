const express = require('express')
const router = express.Router()

const middleware = require('../middleware/verify');

// APIs
const USER_API = require('../users')


// public route
router.get('/health', (req,res) => res.sendStatus(200))
router.post('/', USER_API.addUser)
router.post('/login', USER_API.loginUser)

// authed route
router.get('/isAuthorized', middleware.verify, USER_API.authenticate)

module.exports = {
    router
}