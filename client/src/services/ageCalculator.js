module.exports = {
    calculateAge: calculateAge,
    calculateYearsToRetirement: calculateYearsToRetirement
}

/****************************
 * @desc Approximates the user's age by
 * subtracting current year by the birthday
 * year
 * 
 * @number birth year of the user
 ***************************/
function calculateAge(birthyear) {
    const currentTime = Date.now();
    return currentTime.getFullYear() - birthyear;
}

/****************************
 * @desc Approximates the years until the
 * user will retire
 * 
 * @number retirement age is how old the
 * user expects to be when they retire
 * @date birthday is the user's birthday
 ***************************/
function calculateYearsToRetirement(retirementAge, birthyear) {
    const userAge = calculateAge(birthyear);
    return retirementAge - userAge;
}