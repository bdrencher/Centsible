module.exports = {
    createRetirementProfile: createRetirementProfile,
    updateRetirementProfile: updateRetirementProfile,
    getRetirementProfile: getRetirementProfile
}

const accessTokenController = require('./accessTokenController');
const retirementProfilesHelper = require('../databaseHelper/retirementProfilesHelper');
const RetirementProfile = require('../model/retirementProfile');

/*****************************************************************
 * @desc sends data to database helper
 * to create a retirement profile
 * @string username 
 * @string hashedToken
 * @RetirementProfile profile - contains user's data
 * @httpResponse res - sends response to client
 *****************************************************************/
function createRetirementProfile(username, hashedToken, profile, res) {
    accessTokenController.validateUserAccessToken(username, hashedToken, (err, result) => {
        if (err) {
            res.status(500).json({ Success: false });
        } else if (result) {
            retirementProfilesHelper.enterRetirementData(username, profile, (err, result) => {
                if (err) {
                    retirementProfilesHelper.updateRetirementData(username, profile, (err, result) => { // update if the user already exists
                        if (err) {
                            console.log(err);
                            res.status(500).json({ Success: false });
                        } else {
                            res.status(200).json({ Success: true });
                        }
                    })
                } else {
                    res.status(200).json({ Success: true });
                }
            });
        } else {
            res.status(500).json({ Success: false, invalidCredentials: true });
        }
    });
}

 /*****************************************************************
 * @desc updates the provided user's profile with the given profile
 * @string username
 * @string hashedToken
 * @RetirementProfile profile
 * @httpResponse res - sends response to client
 *****************************************************************/
function updateRetirementProfile(username, hashedToken, profile, res) {
    accessTokenController.validateUserAccessToken(username, hashedToken, (err, result) => {
        if (result) {
            retirementProfilesHelper.updateRetirementData(username, profile, (err, result) => {
                if (err) {
                    res.status(500).json({ Success: false });
                } else {
                    res.status(200).json({ Success: true });
                }
            });
        } else {
            res.status(500).json({Success: false, invalidCredentials: true})
        }
    });
}

 /****************************************************
 * @desc retrieves the user's retirement profile data
 * @string username
 * @string hashedToken
 * @httpResponse res - sends response to client
 ****************************************************/
function getRetirementProfile(username, hashedToken, res) {
    accessTokenController.validateUserAccessToken(username, hashedToken, (err, result) => {
        if(result) {
            retirementProfilesHelper.getRetirementData(username, (err, result) => {
                if (err) {
                    res.status(500).json({ Success: false });
                } else {
                    let profile = new RetirementProfile(result.current_age, result.retirement_age, result.current_assets, result.retirement_goal);
                    res.status(200).json({ Success: true, profile: profile });
                }
            });
        } else {
            res.status(500).json({Success: false, invalidCredentials: true});
        }
    });
}