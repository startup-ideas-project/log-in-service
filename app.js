const express = require('express')
const cors = require('cors')

const corsOptions = {
    origin: '*'
}
// APIs
const USER_API = require('./api/users')


const app = express()
app.use(express.json());
app.use(cors(corsOptions))

// configs
const port = process.env.PORT || 4000

app.get('/health', (req,res) => res.sendStatus(200))
app.post('/user/login', USER_API.loginUser)
app.post('/user', USER_API.addUser)

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = {
  server
}