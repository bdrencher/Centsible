module.exports = 
/**************************************
 * user
 * @param username: string
 * @param passhash: string bcrypt hash
 * 
 * This class is used to store
 * a user's username and password hash
 **************************************/
class User {
    username = '';
    passhash = '';
    constructor(iUsername, iPasshash) {
        this.username = iUsername;
        this.passhash = iPasshash;
    }
}