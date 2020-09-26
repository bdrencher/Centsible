module.exports = {
    enterRetirementData: enterRetirementData,
    updateRetirementData: updateRetirementData,
    getRetirementData: getRetirementData
}

const { Pool } = require('pg');
const pool = new Pool({
    connectionString: process.env.DATABASE_URL
});

/*********************************************
 * enterRetirementData
 * @param username: string
 * @param profile: RetirementProfile
 * @param callback: function
 * 
 * Creates a unique entry (by userid) to store
 * the users retirement information
 ********************************************/

function enterRetirementData(username, profile, callback) {
    const query = {
        text: 'INSERT INTO retirement_information VALUES ((SELECT userid FROM users WHERE username = $1), $current_age, $retirement_age, $retirement_goal, $current_assets)',
        values: [username, profile.currentAge, profile.retirementAge, profile.retirementGoal, profile.currentAssets]
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

/*********************************************
 * updateRetirementData
 * @param username: string
 * @param profile: RetirementProfile
 * @param callback: function
 * 
 * updates the retirement datat for the user.
 * A new row of retirement data will not be
 * created, there is only one row per user.
 ********************************************/

function updateRetirementData(username, profile, callback) {
    const query = {
        text: 'UPDATE retirement_information SET current_age = $1, retirement_age = $2, retirement_goal = $3, current_assets = $4 WHERE userid = (SELECT userid FROM users WHERE username = $5)',
        values: [profile.currentAge, profile.retirementAge, profile.retirementGoal, profile.currentAssets, username]
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

/*********************************************
 * getRetirementData
 * @param username: string
 * @param callback: function
 * 
 * Retrieves all information from the 
 * retirement information table except for the
 * userid. This data can be used to build
 * a retirement profile class.
 ********************************************/

function getRetirementData(username, callback) {
    const query = {
        text: 'SELECT (current_age, retirement_age, retirement_goal, current_assets) FROM retirement_information WHERE userid = (SELECT userid FROM users WHERE uesrname = $1)',
        values: [username]
    };
    pool.query(query, (err, result) => {
        if (err) {
            console.log(err);
            callback(err, false);
        } else {
            callback(null, result.rows[0]);
        }
    });
}