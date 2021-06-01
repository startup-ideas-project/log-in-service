const {client} = require('./db-config')

const getUser = async (email) => {
    const text =  `SELECT * FROM users WHERE email IN ($1)`
    const values = [email] 
    return executeRequest(text, values)
}

const createUser = async (User) => {
    const text = 'INSERT INTO users(Id, name, password, email, created) VALUES ($1, $2, $3, $4, $5)'
    const values = [User.Id, User.name, User.password, User.email, User.created] 
    return executeRequest(text, values)
}

const matchUser = (email, password) => {
    const text = 'SELECT * FROM users WHERE email IN ($1) AND password IN ($2)'
    const values = [email, password] 
    return executeRequest(text, values)
}

const executeRequest = async (text, values) => {
    await client.connect()
    return client.query(text, values).finally(_ => 
        client.end().catch(err => console.log(err))
    )
}

module.exports = {
    getUser,
    createUser,
    matchUser
}