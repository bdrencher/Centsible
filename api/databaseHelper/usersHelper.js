module.exports = {
    createUser: createUser,
    insertUserPasshash: insertUserPasshash,
    getUserPasshash: getUserCredentials,
    deleteUser: deletePasshashData
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
        console.log(err, result);
        if (err || result == null) {
            console.log(err);
            callback(err, false);
        } else {
            callback(null, result.rows[0]);
        }
    });
 }

 /*****************************************
  * @desc deletes a user from the database
  * @param username string
  * @param callback function
  ****************************************/
 function deleteUser(username) {
    const query = {
        text: 'DELETE FROM users WHERE userid = (SELECT userid FROM users WHERE username = $1)',
        values: [username]
    };
    pool.query(query, (err, result) => {
        if (err) {
            console.log(err);
        }
    });
 }

 /*****************************************
  * @desc deletes retirement data
  * @param username string
  ****************************************/
 function deleteRetirementData(username, callback) {
    const query = {
        text: 'DELETE FROM retirement_information WHERE userid = (SELECT userid FROM users WHERE username = $1)',
        values: [username]
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

 /*******************************************
  * @desc deletes passhash data
  * @param username string
  ******************************************/
 function deletePasshashData(username, callback) {
    const query = {
        text: 'DELETE FROM password_hash WHERE userid = (SELECT userid FROM users WHERE username = $1)',
        values: [username]
    };
    pool.query(query, (err, result) => {
        if (err) {
            console.log(err);
            callback(err, false);
        } else {
            deleteRetirementData(username, (err, result) => {
                if (err) {
                    console.log(err);
                } else {
                    deleteUser(username);
                }
            });
            callback(null, true);
        }
    });
 }