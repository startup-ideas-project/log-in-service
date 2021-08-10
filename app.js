const express = require('express')
const cors = require('cors')

const corsOptions = {
    origin: '*'
}

//middleware
const {router} = require('./api/routes/routes')


const app = express()
app.use(express.json());
app.use(cors(corsOptions))
app.use('/user', router)

// configs
const port = process.env.PORT || 4000

const server = app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

module.exports = {
  server
}