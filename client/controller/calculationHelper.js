/**************
 * $1
 * $20
 * $100
 * $500
 *************/
module.exports = {
    
}
/****************************************
 * @desc calculates compound intrest based
 * on an annual compounding. This does not
 * account for inflation
 * @number principle - The starting investment
 * @number returnOnInvestment - percentage of
 * expected return as a decimal
 * @number timeInYears - expected duration
 * of investment in years
 * @boolean accountForInflation - true will
 * decrease ROI by 3%
 ****************************************/
function compoundInterestCalculator(principle, returnOnInvestment, timeInYears, accountForInflation) {
    if (accountForInflation) {
        return Math.floor(principle * (1 + returnOnInvestment - 0.03)**(timeInYears)); // compounds yearly, accounts for inflation
    } else {
        return Math.floor(principle * (1 + returnOnInvestment)**(timeInYears)); // compounded yearly, doesn't account for inflation
    }
}

function testSnP500() {
    const principle1   = 1;
    const principle20  = 20;
    const principle100 = 100;
    const principle500 = 500;
    // accounting for inflation
    const answer1Inflation   = 21;
    const answer20Inflation  = 420;
    const answer100Inflation = 2100;
    const answer500Inflation = 10501;
    const result1Inflation   = compoundInterestCalculator(principle1, 0.1, 45, true);
    const result20Inflation  = compoundInterestCalculator(principle20, 0.1, 45, true);
    const result100Inflation = compoundInterestCalculator(principle100, 0.1, 45, true);
    const result500Inflation = compoundInterestCalculator(principle500, 0.1, 45, true);
    // not accounting for inflation
    const answer1   = 72;
    const answer20  = 1457;
    const answer100 = 7289;
    const answer500 = 36445;
    const result1   = compoundInterestCalculator(principle1, 0.1, 45, false);
    const result20  = compoundInterestCalculator(principle20, 0.1, 45, false);
    const result100 = compoundInterestCalculator(principle100, 0.1, 45, false);
    const result500 = compoundInterestCalculator(principle500, 0.1, 45, false);

    if (answer1Inflation == result1Inflation) {
        console.log("inflation test 1 passed!");
    } else {
        console.log("inflation test 1 failed!");
    }

    if (answer20Inflation == result20Inflation) {
        console.log("inflation test 2 passed!");
    } else {
        console.log("inflation test 2 failed!");
    }

    if (answer100Inflation == result100Inflation) {
        console.log("inflation test 3 passed!");
    } else {
        console.log("inflation test 3 failed!");
    }

    if (answer500Inflation == result500Inflation) {
        console.log("inflation test 4 passed!");
    } else {
        console.log("inflation test 4 failed!");
    }


    if (answer1 == result1) {
        console.log("test 1 passed!");
    } else {
        console.log("test 1 failed!");
    }

    if (answer20 == result20) {
        console.log("test 2 passed!");
    } else {
        console.log("test 2 failed!");
    }

    if (answer100 == result100) {
        console.log("test 3 passed!");
    } else {
        console.log("test 3 failed!");
    }

    if (answer500 == result500) {
        console.log("test 4 passed!");
    } else {
        console.log("test 4 failed!");
    }
}

testSnP500();