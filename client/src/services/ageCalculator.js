module.exports = {
    calculateAge: calculateAge
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