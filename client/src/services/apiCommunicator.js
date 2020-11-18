const axios = require('axios').default;

export class ApiCommunicator {
    apiUrlRoot = "https://centsible-finance.herokuapp.com";

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