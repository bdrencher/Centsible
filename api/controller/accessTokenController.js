module.exports = {
    validateUserAccessToken: validateUserAccessToken
}

const usersHelper = require("../databaseHelper/usersHelper");
const bcrypt = require('bcrypt');

/*************************************************
 * @desc confirms that the user is using a valid
 * access token
 * 
 * @string username
 * @string hashedToken
 ************************************************/
function validateUserAccessToken(username, hashedToken, callback) {
    usersHelper.validateAccessToken(username, (err, result) => {
        if (err) {
            res.status(500).json({Success: false});
        } else {
            bcrypt.compare(result.access_token, hashedToken, (err, result) => {
                if (err) {
                    console.log(err);
                    callback(err, false);
                } else {
                    callback(null, true);
                }
            });
        }
    });
}