module.exports = {
    calculateAge: calculateAge,
    calculateYearsToRetirement: calculateYearsToRetirement
}

/****************************
 * @desc Approximates the user's age by
 * subtracting current year by the birthday
 * year
 * 
 * @date birthday of the user
 ***************************/
function calculateAge(birthday) {
    const currentTime = Date.now();
    return currentTime.getFullYear() - birthday.getFullYear;
}

/****************************
 * @desc Approximates the years until the
 * user will retire
 * 
 * @number retirement age is how old the
 * user expects to be when they retire
 * @date birthday is the user's birthday
 ***************************/
function calculateYearsToRetirement(retirementAge, birthday) {
    const userAge = calculateAge(birthday);
    return retirementAge - userAge;
}