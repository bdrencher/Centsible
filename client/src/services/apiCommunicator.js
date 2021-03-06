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
        axios.post(this.apiUrlRoot + '/createUser', {
            username: username,
            password: password
        })
        .then((response) => {
            localStorage.setItem("user", username);
            localStorage.setItem("access_token", response.data.access_token);
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
    validateCredentials(username, password, callback) {
        axios.post(this.apiUrlRoot + '/validateCredentials', {
            username: username,
            password: password
        })
        .then((response) => {
            if (!response.data.Success || !response.data.validCredentials) {
                alert("Invalid credentials, please try again or create an account.");
                
            } else {
                localStorage.setItem("access_token", response.data.access_token);
                localStorage.setItem("user", username);
                callback(response.data.Success);
            }
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
    deleteUser(username, access_token) {
        axios.delete((this.apiUrlRoot + '/deleteUser'), {
            data: {
                username: username,
                access_token: access_token
            }
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
    createRetirementProfile(username, access_token, profile) {
        axios.post(this.apiUrlRoot + '/createRetirementProfile', {
            username: username,
            access_token: access_token,
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
    updateRetirementProfile(username, access_token, profile) {
        axios.put(this.apiUrlRoot + '/updateRetirement', {
            data: {
                username: username,
                access_token: access_token,
                profile: profile
            }
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
    retrieveRetirementProfile(username, access_token, callback) {
        axios.post(this.apiUrlRoot + '/getRetirementProfile', {
            username: username,
            access_token: access_token
        })
        .then((response) => {
            if (response.data.Success) {
                callback(response.data.profile);
            } else {
                callback(false);
            }
        })
        .catch((error) => {
            callback(false);
            console.log(error);
        });
    }
}