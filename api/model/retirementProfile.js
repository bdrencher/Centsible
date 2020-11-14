module.exports = 
/*********************************
 * RetirementProfile: class
 * @Number userAge
 * @Number retirementAge
 * @Number currentAssets
 * @Number retirementGoal
 * 
 * Used to store a users retirement
 * data
 ********************************/
class RetirementProfile {
    userAge;
    retirementAge;
    currentAssets;
    retirementGoal;
    
    constructor(iUserAge, iRetirementAge, iCurrentAssets, iRetirementGoal) {
        this.userAge = iUserAge;
        this.retirementAge = iRetirementAge;
        this.currentAssets = iCurrentAssets;
        this.retirementGoal = iRetirementGoal;
    }

}