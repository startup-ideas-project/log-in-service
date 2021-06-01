const {client} = require('./db-config')

const getUser = async () => {
    await client.connect()
    return client.query('SELECT * FROM users').then(data => {
        client.end()
        return data.rows;
    })
}

const checkUserEmail = async (email) => {
    await client.connect()
    const text =  `SELECT COUNT(*) FROM users WHERE email IN ($1)`
    const values = [email] 
    return client.query(text, values).finally(_ => 
        client.end().catch(err => console.log(err))
    )
}

const createUser = async (User) => {
    await client.connect()
    const text = 'INSERT INTO users(Id, name, password, email, created) VALUES ($1, $2, $3, $4, $5)'
    const values = [User.Id, User.name, User.password, User.email, User.created] 
    return client.query(text, values).finally(_ => 
        client.end().catch(err => console.log(err))
    )
}

module.exports = {
    getUser,
    createUser,
    checkUserEmail
}