module.exports = {
    createUser: createUser,
    insertUserPasshash: insertUserPasshash,
    getUserPasshash: getUserCredentials,
    associateFirstAccessToken: associateFirstAccessToken,
    scrambleToken: scrambleToken,
    validateAccessToken: validateAccessToken,
    deleteUser: deleteUser
}

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

/*******************************************
 * createUser
 * @param user: user (see model/users.js)
 * @param callback: returns false if failed
 * true if successful
 * 
 * This function will attempt to insert a
 * new user into the users table. If successful,
 * the function will insert the user's passhash.
 *******************************************/

function createUser(user, callback) {
    const query = {
        text: 'INSERT INTO users (username) VALUES ($1)',
        values: [user.username]
    };
    pool.query(query, (err, result) => {
        if (err) {
            console.log(err);
            callback(err, false);
        } else {
            insertUserPasshash(user.username, user.passhash);
            callback(null, true);
        }
    });
}

/******************************************
 * insertUserPasshash
 * @param username: string - the user's
 * username
 * @param passhash: string - the user's
 * bcrypt passhash
 * 
 * This function inserts the users passhash
 * into the password table.
 ******************************************/

function insertUserPasshash(username, passhash) {
    const query = {
        text: 'INSERT INTO password_hash VALUES ((SELECT userid FROM users WHERE username = $1), $2)',
        values: [username, passhash]
    };
    pool.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }
    });
}

/*******************************************
 * getUserCredentials
 * @param username: string
 * @param callback: function - returns
 * passhash if the user exists, false
 * otherwise
 * 
 * retrieves user's passhash and passes it
 * on to the callback
 ******************************************/

function getUserCredentials(username, callback) {
    const query = {
        text: 'SELECT passhash FROM password_hash WHERE userid = (SELECT userid FROM users WHERE username = $1)',
        values: [username]
    }
    pool.query(query, (err, result) => {
        if (err || result.rowCount == 0) {
            console.log(err);
            callback(err, false);
        } else {
            callback(null, result.rows[0]);
        }
    });
}

/*******************************************
  * @desc deletes the user
  * @param username string
  ******************************************/
function deleteUser(username) {
    const queryOne = {
        text: 'DELETE FROM password_hash WHERE userid = (SELECT userid FROM users WHERE username = $1)',
        values: [username]
    };
    const queryTwo = {
        text: 'DELETE FROM retirement_information WHERE userid = (SELECT userid FROM users WHERE username = $1)',
        values: [username]
    };
    const queryThree = {
        text: 'DELETE from users WHERE userid = (SELECT userid FROM users WHERE username = $1)',
        values: [username]
    };
    pool.query(queryOne)
    .then(pool.query(queryTwo))
    .then(pool.query(queryThree))
    .finally(() => {
        console.log("user " + username + " has been deleted");
    })
    .catch((error) => {
        console.log(error);
    })
}

/***************************************
 * @desc associates the token with the
 * username
 * 
 * @string token
 * @string username
 * @function callback takes error, result
 ****************************************/
function associateFirstAccessToken(token, username, callback) {
    const query = {
        text: 'UPDATE users SET access_token = $1 WHERE username = $2',
        values: [token, username]
    };
    pool.query(query, (err, result) => {
        if (err) {
            console.log(err);
            callback(err, false, null);
        } else {
            callback(null, true, token);
        }
    });
}

/******************************************
 * @desc assigns a random token as the users
 * new token
 * 
 * @string oldToken
 * @string newToken
 * @function callbak takes error, result
 *****************************************/
function scrambleToken(oldToken, newToken, callback) {
    const query = {
        text: 'UPDATE users SET access_token = $1 WHERE access_token = $2',
        value: [newToken, oldToken]
    };
    pool.query(query, (err, result) => {
        if (err) {
            console.log(err);
            callback(err, false);
        } else {
            callback(null, true);
        }
    });
}

function validateAccessToken(username, callback) {
    const query = {
        text: 'SELECT access_token FROM users WHERE username = $1',
        values: [username]
    }
    pool.query(query, (err, result) => {
        if (err) {
            console.log(err);
            callback(err, false);
        } else {
            callback(null, result);
        }
    });
}