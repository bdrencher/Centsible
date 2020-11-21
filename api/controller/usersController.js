module.exports = {
    createUser: createUser,
    validateUserCredentials: validateUserCredentials,
    deleteUser: deleteUser,
    logoutUser: logoutUser
}

const AccessTokenGenerator = require('../model/TokenGenerator');
const accessTokenController = require('./accessTokenController');
const usersHelper = require('../databaseHelper/usersHelper');
const bcrypt = require('bcrypt');
const User = require ('../model/user');
const tokenGenerator = new AccessTokenGenerator();

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
            usersHelper.associateFirstAccessToken(tokenGenerator.generateToken(), username, (err, result, token) => {
                if (!result) {
                    res.status(500).json({Success: false })
                } else {
                    bcrypt.hash(token, 10, (err, result) => {
                        if (err) {
                            res.status(500).json({Success: false});
                        } else {
                            res.status(201).json({Success: true, access_token: result});
                        }
                    });
                }
            });
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
                    usersHelper.associateFirstAccessToken(tokenGenerator.generateToken(), username, (err, result, token) => {
                        if (!result) {
                            res.status(500).json({Success: false, validCredentials: false })
                        } else {
                            bcrypt.hash(token, 10, (err, result) => {
                                if (err) {
                                    res.status(500).json({Success: false, validCredentials: false});
                                }
                                else {
                                    res.status(200).json({Success: true, validCredentials: true, access_token: result});
                                }
                            });
                        }
                    });
                } else {
                    res.status(200).json({Success: true, validCredentials: false});
                }
            });
        }
    });
}

/**************************************************
 * @desc replaces the user's previous access key
 * with something else
 * 
 * @string token
 *************************************************/
function logoutUser(token, res) {

    usersHelper.scrambleToken(token, tokenGenerator.generateToken(), (err, result) => {
        if (err) {
            res.status(500);
        } else {
            res.status(200);
        }
    });
}


/**************************************************
 * @desc Deletes a user and their retirement data
 * @string username
 * @string hashedToken
 * @httpResponse res
 *************************************************/
function deleteUser(username, hashedToken, res) {
    accessTokenController.validateUserAccessToken(username, hashedToken, (err, result) => {
        if (result) {
            usersHelper.deleteUser(username);
            res.status(200).json({Success: true});
        } else {
            res.status(500).json({Success: false, invalidCredentials: true});
        }
    });
}