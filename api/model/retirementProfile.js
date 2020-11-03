module.exports = 
/*********************************
 * RetirementProfile: class
 * @param iBirthyear: int
 * @param iRetirementAge: int
 * @param iCurrentAssets: Number
 * @param iRetirementGoal: Number
 * 
 * Used to store a users retirement
 * data
 ********************************/
class RetirementProfile {
    birthyear = 0;
    retirementAge = 0;
    currentAssets = 0;
    retirementGoal = 0;
    
    constructor(iBirthyear, iRetirementAge, iCurrentAssets, iRetirementGoal) {
        this.birthyear = iBirthyear;
        this.retirementAge = iRetirementAge;
        this.currentAssets = iCurrentAssets;
        this.retirementGoal = iRetirementGoal;
    }

}