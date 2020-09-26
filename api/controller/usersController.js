module.exports = {
    createUser: createUser,
    validateUserCredentials: validateUserCredentials
}

const usersHelper = require('../databaseHelper/usersHelper');
const bcrypt = require('bcrypt');
const User = require ('../model/user');

/********************************************
 * @desc creates a new user
 * @param string username
 * @param string passhash
 * @param httpResponse res
 *******************************************/
function createUser(username, passhash, res) {
    let newUser = new User(username, passhash);
    usersHelper.createUser(newUser, (err, result) => {
        if(err) {
            res.status(500).json({Success: false});
        } else {
            res.status(200).json({Success: true});
        }
    });
}

/****************************************************
 * @desc determines if provided credentials are valid
 * @param string username
 * @param string password
 * @param httpResponse res
 ***************************************************/
function validateUserCredentials(username, password, res) {
    usersHelper.getUserPasshash(username, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({Success: false, validCredentials: false});
        } else {
            bcrypt.compare(password, result, (err, isValid) => {
                if (err) {
                    console.log(err);
                    res.status(500).json({Success: false, validCredentials: false});
                } else if (isValid) {
                    res.status(200).json({Success: true, validCredentials: true});
                } else {
                    res.status(200).json({Success: true, validCredentials: false});
                }
            });
        }
    });
}