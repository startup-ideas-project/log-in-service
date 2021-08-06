const jwt = require("jsonwebtoken")
const {configs} = require('../../../configs/app-config');

const verify = (req, res, next) => {
    const token = req.headers.authorization
    if(!token) return res.sendStatus(403)
    jwt.verify(token.split(" ")[1], configs.jwtSecret, (err, decoded) => {
        console.log(err)
        if(err) return res.status(500).json({error: 'failed to authenticate'})
        next()
    })
}

module.exports = {
    verify
}