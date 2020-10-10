/***********************************************************
 * $1
 * $20
 * $100
 * $500
 * 
 * S&P 500 historical annual return without inflation: 10%
 * S&P 500 historical annual return with inflation: 7%
 * 
 * NASDAQ historical annual return without inflation: 14.09%
 * NASDAQ historical annual return with inflation: 11.09%
 * 
 * RUSSEL 1000 historical annual return without inflation: 12.01%
 * RUSSEL 1000 historical annual return with inflation: 9%
 * 
 * inflation is assumed to be 3% even though the US is targeting a 2.5% inflation rate
 * 
 * compound Interest and principle = P(1 + r/n)^(nt)
 *    P = principle amount
 *    r = Annual nominal interest rate as a decimal
 *    n = number of compounding periods per unit t
 *    t = time in years
 *********************************************************/
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
        console.log("S&P500 inflation test 1 passed!");
    } else {
        console.log("S&P500 inflation test 1 failed!", result1Inflation);
    }

    if (answer20Inflation == result20Inflation) {
        console.log("S&P500 inflation test 2 passed!");
    } else {
        console.log("S&P500 inflation test 2 failed!", result20Inflation);
    }

    if (answer100Inflation == result100Inflation) {
        console.log("S&P500 inflation test 3 passed!");
    } else {
        console.log("S&P500 inflation test 3 failed!", result100Inflation);
    }

    if (answer500Inflation == result500Inflation) {
        console.log("S&P500 inflation test 4 passed!");
    } else {
        console.log("S&P500 inflation test 4 failed!", result500Inflation);
    }


    if (answer1 == result1) {
        console.log("S&P500 test 1 passed!");
    } else {
        console.log("S&P500 test 1 failed!", result1);
    }

    if (answer20 == result20) {
        console.log("S&P500 test 2 passed!");
    } else {
        console.log("S&P500 test 2 failed!", result20);
    }

    if (answer100 == result100) {
        console.log("S&P500 test 3 passed!");
    } else {
        console.log("S&P500 test 3 failed!", result100);
    }

    if (answer500 == result500) {
        console.log("S&P500 test 4 passed!");
    } else {
        console.log("S&P500 test 4 failed!", result500);
    }
}

function testNASDAQ() {
    const principle1   = 1;
    const principle20  = 20;
    const principle100 = 100;
    const principle500 = 500;
    // accounting for inflation
    const answer1Inflation   = 109;
    const answer20Inflation  = 2190;
    const answer100Inflation = 10953;
    const answer500Inflation = 54765;
    const result1Inflation   = compoundInterestCalculator(principle1, 0.14, 45, true);
    const result20Inflation  = compoundInterestCalculator(principle20, 0.14, 45, true);
    const result100Inflation = compoundInterestCalculator(principle100, 0.14, 45, true);
    const result500Inflation = compoundInterestCalculator(principle500, 0.14, 45, true);
    // not accounting for inflation
    const answer1   = 363;
    const answer20  = 7273;
    const answer100 = 36367;
    const answer500 = 181839;
    const result1   = compoundInterestCalculator(principle1, 0.14, 45, false);
    const result20  = compoundInterestCalculator(principle20, 0.14, 45, false);
    const result100 = compoundInterestCalculator(principle100, 0.14, 45, false);
    const result500 = compoundInterestCalculator(principle500, 0.14, 45, false);

    if (answer1Inflation == result1Inflation) {
        console.log("NASDAQ inflation test 1 passed!");
    } else {
        console.log("NASDAQ inflation test 1 failed!", result1Inflation);
    }

    if (answer20Inflation == result20Inflation) {
        console.log("NASDAQ inflation test 2 passed!");
    } else {
        console.log("NASDAQ inflation test 2 failed!", result20Inflation);
    }

    if (answer100Inflation == result100Inflation) {
        console.log("NASDAQ inflation test 3 passed!");
    } else {
        console.log("NASDAQ inflation test 3 failed!", result100Inflation);
    }

    if (answer500Inflation == result500Inflation) {
        console.log("NASDAQ inflation test 4 passed!");
    } else {
        console.log("NASDAQ inflation test 4 failed!", result500Inflation);
    }


    if (answer1 == result1) {
        console.log("NASDAQ test 1 passed!");
    } else {
        console.log("NASDAQ test 1 failed!", result1);
    }

    if (answer20 == result20) {
        console.log("NASDAQ test 2 passed!");
    } else {
        console.log("NASDAQ test 2 failed!", result20);
    }

    if (answer100 == result100) {
        console.log("NASDAQ test 3 passed!");
    } else {
        console.log("NASDAQ test 3 failed!", result100);
    }

    if (answer500 == result500) {
        console.log("NASDAQ test 4 passed!");
    } else {
        console.log("NASDAQ test 4 failed!", result500);
    }
}

function testRussel1000() {
    const principle1   = 1;
    const principle20  = 20;
    const principle100 = 100;
    const principle500 = 500;
    // accounting for inflation
    const answer1Inflation   = 48;
    const answer20Inflation  = 966;
    const answer100Inflation = 4832;
    const answer500Inflation = 24163;
    const result1Inflation   = compoundInterestCalculator(principle1, 0.12, 45, true);
    const result20Inflation  = compoundInterestCalculator(principle20, 0.12, 45, true);
    const result100Inflation = compoundInterestCalculator(principle100, 0.12, 45, true);
    const result500Inflation = compoundInterestCalculator(principle500, 0.12, 45, true);
    // not accounting for inflation
    const answer1   = 163;
    const answer20  = 3279;
    const answer100 = 16398;
    const answer500 = 81993;
    const result1   = compoundInterestCalculator(principle1, 0.12, 45, false);
    const result20  = compoundInterestCalculator(principle20, 0.12, 45, false);
    const result100 = compoundInterestCalculator(principle100, 0.12, 45, false);
    const result500 = compoundInterestCalculator(principle500, 0.12, 45, false);

    if (answer1Inflation == result1Inflation) {
        console.log("Russel1000 inflation test 1 passed!");
    } else {
        console.log("Russel1000 inflation test 1 failed!", result1Inflation);
    }

    if (answer20Inflation == result20Inflation) {
        console.log("Russel1000 inflation test 2 passed!");
    } else {
        console.log("Russel1000 inflation test 2 failed!", result20Inflation);
    }

    if (answer100Inflation == result100Inflation) {
        console.log("Russel1000 inflation test 3 passed!");
    } else {
        console.log("Russel1000 inflation test 3 failed!", result100Inflation);
    }

    if (answer500Inflation == result500Inflation) {
        console.log("Russel1000 inflation test 4 passed!");
    } else {
        console.log("Russel1000 inflation test 4 failed!", result500Inflation);
    }


    if (answer1 == result1) {
        console.log("Russel1000 test 1 passed!");
    } else {
        console.log("Russel1000 test 1 failed!", result1);
    }

    if (answer20 == result20) {
        console.log("Russel1000 test 2 passed!");
    } else {
        console.log("Russel1000 test 2 failed!", result20);
    }

    if (answer100 == result100) {
        console.log("Russel1000 test 3 passed!");
    } else {
        console.log("Russel1000 test 3 failed!", result100);
    }

    if (answer500 == result500) {
        console.log("Russel1000 test 4 passed!");
    } else {
        console.log("Russel1000 test 4 failed!", result500);
    }
}

testSnP500();
testNASDAQ();
testRussel1000();