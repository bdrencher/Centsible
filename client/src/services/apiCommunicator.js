const axios = requier('axios').default;
const apiUrlRoot = "https://centsible-finance.herokuapp.com";

function createUser(username, password) {
    axios.post('/createUser', {
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