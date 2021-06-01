
// APIs
const USER_API = require('./api/users')
const express = require('express')

const app = express()
app.use(express.json());

// configs
const port = process.env.PORT || 3001

app.post('/user', USER_API.addUser)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})