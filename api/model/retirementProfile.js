module.exports = 
/*********************************
 * RetirementProfile: class
 * @param iCurrentAge: int
 * @param iRetirementAge: int
 * @param iCurrentAssets: Number
 * @param iRetirementGoal: Number
 * 
 * Used to store a users retirement
 * data
 ********************************/
class RetirementProfile {
    currentAge = 0;
    retirementAge = 0;
    currentAssets = 0;
    retirementGoal = 0;
    
    constructor(iCurrentAge, iRetirementAge, iCurrentAssets, iRetirementGoal) {
        this.currentAge = iCurrentAge;
        this.retirementAge = iRetirementAge;
        this.currentAssets = iCurrentAssets;
        this.retirementGoal = iRetirementGoal;
    }

}