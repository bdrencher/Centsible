const axios = require('axios').default;
const apiUrlRoot = "https://centsible-finance.herokuapp.com";

function createUser(username, password) {
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

function validateCredentials(username, password) {
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

function deleteUser(username) {
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

function createRetirementProfile(username, profile) {
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

function updateRetirementProfile(username, profile) {
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

function retrieveRetirementProfile(username) {
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