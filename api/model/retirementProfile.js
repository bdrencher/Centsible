module.exports = 
/*********************************
 * RetirementProfile: class
 * @Date iBirthdate
 * @Number iRetirementAge
 * @Number iCurrentAssets
 * @Number iRetirementGoal
 * 
 * Used to store a users retirement
 * data
 ********************************/
class RetirementProfile {
    birthdate;
    retirementAge;
    currentAssets;
    retirementGoal;
    
    constructor(iBirthdate, iRetirementAge, iCurrentAssets, iRetirementGoal) {
        this.birthdate = iBirthdate;
        this.retirementAge = iRetirementAge;
        this.currentAssets = iCurrentAssets;
        this.retirementGoal = iRetirementGoal;
    }

}