module.exports = {
    createRetirementProfile: createRetirementProfile,
    updateRetirementProfile: updateRetirementProfile,
    getRetirementProfile: getRetirementProfile
}

const retirementProfilesHelper = require('../databaseHelper/retirementProfilesHelper');
const RetirementProfile = require('../model/retirementProfile');

/*****************************************************************
 * @desc sends data to database helper
 * to create a retirement profile
 * @param string username 
 * @param RetirementProfile profile - contains user's data
 * @param httpResponse res - sends response to client
 *****************************************************************/
function createRetirementProfile(username, profile, res) {
    retirementProfilesHelper.enterRetirementData(username, profile, (err, result) => {
        if (err) {
            res.status(500).json({ Success: false });
        } else {
            res.status(200).json({ Success: true });
        }
    });
}

 /*****************************************************************
 * @desc updates the provided user's profile with the given profile
 * @param string username
 * @param RetirementProfile profile
 * @param httpResponse res - sends response to client
 *****************************************************************/
function updateRetirementProfile(username, profile, res) {
    retirementProfilesHelper.updateRetirementData(username, profile, (err, result) => {
        if (err) {
            res.status(500).json({ Success: false });
        } else {
            res.status(200).json({ Success: true });
        }
    });
}

 /****************************************************
 * @desc retrieves the user's retirement profile data
 * @param string username
 * @param httpResponse res - sends response to client
 ****************************************************/
function getRetirementProfile(username, res) {
    retirementProfilesHelper.getRetirementData(username, (err, result) => {
        if (err) {
            res.status(500).json({ Success: false });
        } else {
            console.log(result);
            let profile = new RetirementProfile(result.current_age, result.retirement_age, result.current_assets, result.retirement_goal);
            res.status(200).json({ Success: true, profile: profile });
        }
    });
}