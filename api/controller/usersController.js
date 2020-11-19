module.exports = {
    createUser: createUser,
    validateUserCredentials: validateUserCredentials,
    deleteUser: deleteUser
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
        if (err) {
            res.status(500).json({Success: false});
        } else {
            res.status(201).json({Success: true});
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
        if (!result) {
            console.log(err);
            res.status(200).json({Success: false, validCredentials: false});
        } else {
            bcrypt.compare(password, result.passhash, (err, isValid) => {
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

/**************************************************
 * @desc Deletes a user and their retirement data
 * @param username string
 * @param httpResponse res
 *************************************************/
function deleteUser(username, res) {
    usersHelper.deleteUser(username, (err, result) => {
        if (err) {
            console.log(err);
            res.status(500).json({ Success: result });
        } else {
            res.status(200).json({ Success: result });
        }
    });
}