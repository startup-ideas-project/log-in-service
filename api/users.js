// This file is auto generated by swagger
const USER_DAO = require('../dao/user');
const { v4: uuidv4 } = require('uuid');
const moment = require('moment')
/**
 * Add a new user to the store
 * 
 *
 * body User Pet object that needs to be added to the store
 * no response value expected for this operation
 **/
 const addUser = async (req, res) => {
    const user = req.body
    //password should be encrypted before sending to the wire. 
    user.Id = uuidv4();
    user.created = moment().format()
    // need validation  before submitting
    const count = await USER_DAO.checkUserEmail(user.email).then(data => data.rows[0].count)
    if(count > 1){
        res.send('Email already existed')
        return
    }
    USER_DAO.createUser(user).then(_ => {
        res.sendStatus(200)
    }).catch(err => console.log(err));
  }

/**
 * Deletes a user
 *
 * userId UUID User id to delete
 * no response value expected for this operation
 **/
const deleteUser = (userId) => {
  return 200;
}


/**
 * Find user by ID
 * Returns a single user
 *
 * userId UUID ID of a user to return a who user
 * returns User
 **/
const getUserById = (userId) => {
//   return new Promise((resolve, reject) {
//     var examples = {};
//     examples['application/json'] = {
//   "name" : "Michael Jordan",
//   "id" : "046b6c7f-0b8a-43b9-b35d-6489e6daee91",
//   "email" : "email"
// };
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
}


/**
 * Logs user into the system
 * 
 *
 * username String The user name for login
 * password String The password for login in clear text
 * returns String
 **/
const loginUser = (username,password)  => {
//   return new Promise((resolve, reject) {
//     var examples = {};
//     examples['application/json'] = "";
//     if (Object.keys(examples).length > 0) {
//       resolve(examples[Object.keys(examples)[0]]);
//     } else {
//       resolve();
//     }
//   });
}

/**
 * Logs out current logged in user session
 * 
 *
 * no response value expected for this operation
 **/
 const logoutUser = () => {
    // return new Promise((resolve, reject) {
    //   resolve();
    // });
  }

module.exports = {
    loginUser,
    logoutUser,
    addUser,
    deleteUser,
    getUserById
}
