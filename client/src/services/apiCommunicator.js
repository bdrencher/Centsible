const axios = require('axios').default;

/*****************************************************
 * @desc contains all the functions needed to pass data
 * to and from the database
 ****************************************************/
export class ApiCommunicator {
    apiUrlRoot = "https://centsible-finance.herokuapp.com";

    /***********************************************
     * @desc sends username and password to database
     * to store the username and store the hash of
     * the password
     * 
     * @string username
     * @string password
     * @returns Boolean indicating success or failure
     **********************************************/
    createUser(username, password) {
        axios.post(apiUrlRoot + '/createUser', {
            username: username,
            password: password
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    /***********************************************
     * @desc compares the provided username and
     * password to the username and
     * the password (compared to stored passhash) in
     * the database.
     * 
     * @string username
     * @string password
     * @returns Boolean indicating success or failure
     **********************************************/
    validateCredentials(username, password) {
        axios.post(apiUrlRoot + '/validateCredentials', {
            username: username,
            password: password
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    /***********************************************
     * @desc deletes the user who activates this
     * function
     * 
     * @string username
     * @returns Boolean indicating success or failure
     **********************************************/
    deleteUser(username) {
        axios.delete(apiUrlRoot + '/deleteUser', {
            username: username
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    /***********************************************
     * @desc sends profile data to the database and
     * records it under the user's unique id.
     * 
     * @string username
     * @RetirementProfile profile
     * @returns Boolean indicating success or failure
     **********************************************/
    createRetirementProfile(username, profile) {
        axios.post(apiUrlRoot + '/createRetirementProfile', {
            username: username,
            profile: profile
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        }); 
    }

    /***********************************************
     * @desc saves new profile data to the unique entry
     * for the provided user
     * 
     * @string username
     * @RetirementProfile profile
     * @returns Boolean indicating success or failure
     **********************************************/
    updateRetirementProfile(username, profile) {
        axios.put(apiUrlRoot + '/updateRetirement', {
            username: username,
            profile: profile
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }

    /***********************************************
     * @desc extracts retirement profile data from
     * the database for the provide user
     * 
     * @string username
     * @returns RetirementProfile
     **********************************************/
    retrieveRetirementProfile(username) {
        axios.post(apiUrlRoot + '/getRetirementProfile', {
            username: username
        })
        .then((response) => {
            console.log(response);
        })
        .catch((error) => {
            console.log(error);
        });
    }
}