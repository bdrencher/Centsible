/*********************************
 * RetirementProfile: class
 * @Number currentAge
 * @Number retirementAge
 * @Number currentAssets
 * @Number retirementGoal
 * 
 * Used to store a users retirement
 * data
 ********************************/
export class RetirementProfile {
    currentAge;
    retirementAge;
    currentAssets;
    retirementGoal;
    
    constructor(iUserAge, iRetirementAge, iCurrentAssets, iRetirementGoal) {
        this.currentAge = iUserAge;
        this.retirementAge = iRetirementAge;
        this.currentAssets = iCurrentAssets;
        this.retirementGoal = iRetirementGoal;
    }

}