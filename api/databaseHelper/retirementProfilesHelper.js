import { RetirementProfile } from '../model/retirementProfile';

module.exports = {

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
    // stub
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
    // stub
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
    // stub
}