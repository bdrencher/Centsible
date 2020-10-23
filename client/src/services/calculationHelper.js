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
   calculateInvestment: calculateInvestment, 
}
/****************************************
 * @desc calculates compound intrest based
 * on an annual compounding. This does not
 * account for inflation
 * @number principle - The starting investment
 * @number fund - 0 for S&P500, 1 for NASDAQ,
 * and 2 for Russell 1000
 * @number timeInYears - expected duration
 * of investment in years
 * @boolean accountForInflation - true will
 * decrease ROI by 3%
 ****************************************/
function calculateInvestment(principle, fund, timeInYears, accountForInflation) {
    let returnOnInvestment = 0;
    switch (fund) {
        case 0:
            returnOnInvestment = 0.10;
            break;
        case 1:
            returnOnInvestment = 0.14;
            break;
        case 2:
            returnOnInvestment = 0.12;
            break;
    }
    if (accountForInflation) {
        return Math.round(principle * (1 + returnOnInvestment - 0.03)**(timeInYears)); // compounds yearly, accounts for inflation
    } else {
        return Math.round(principle * (1 + returnOnInvestment)**(timeInYears)); // compounded yearly, doesn't account for inflation
    }
}

/****************************************
 * @desc tests that the output is correct
 * for a given fund name, principle, and
 * expected output.
 * @number fundSelection - 0 for SnP500,
 * 2 for Russel1000, and 1 for NASDAQ
 * @number principle - the initial investment
 * @boolean withInflation - true to test
 * with accounting for inflation
 ***************************************/
function testIndexFundResult(fundSelection, principle, withInflation, investmentDuration, expectedOutput) {
    let interestRate = 0;
    let fundName = "";
    switch(fundSelection) {
        case 0:
            interestRate = 0.1;
            fundName = "S&P500";
            break;
        case 2:
            interestRate = 0.12;
            fundName = "Russel 1000";
            break;
        case 1:
            interestRate = 0.14;
            fundName = "NASDAQ";
            break;
        default:
            break;
    }

    let result = calculateInvestment(principle, fundSelection, investmentDuration, withInflation);
    if (result == expectedOutput) {
        console.log(fundName + " test passed. Principle: " + principle + ". Years: " + investmentDuration + ". Expected output: " + expectedOutput);
        return true;
    } else {
        console.log(fundName + " test failed. Principle: " + principle + ". Years: " + investmentDuration + ". Expected output: " + expectedOutput + ". Actual output: " + result);
        return false;
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
    testIndexFundResult(0, principle1, true, 45, answer1Inflation);
    testIndexFundResult(0, principle20, true, 45, answer20Inflation);
    testIndexFundResult(0, principle100, true, 45, answer100Inflation);
    testIndexFundResult(0, principle500, true, 45, answer500Inflation);
    // not accounting for inflation
    const answer1   = 73;
    const answer20  = 1458;
    const answer100 = 7289;
    const answer500 = 36445;
    testIndexFundResult(0, principle1, false, 45, answer1);
    testIndexFundResult(0, principle20, false, 45, answer20);
    testIndexFundResult(0, principle100, false, 45, answer100);
    testIndexFundResult(0, principle500, false, 45, answer500);

}

function testNASDAQ() {
    const principle1   = 1;
    const principle20  = 20;
    const principle100 = 100;
    const principle500 = 500;
    // accounting for inflation
    const answer1Inflation   = 110;
    const answer20Inflation  = 2191;
    const answer100Inflation = 10953;
    const answer500Inflation = 54765;
    testIndexFundResult(1, principle1, true, 45, answer1Inflation);
    testIndexFundResult(1, principle20, true, 45, answer20Inflation);
    testIndexFundResult(1, principle100, true, 45, answer100Inflation);
    testIndexFundResult(1, principle500, true, 45, answer500Inflation);
    // not accounting for inflation
    const answer1   = 364;
    const answer20  = 7274;
    const answer100 = 36368;
    const answer500 = 181840;
    testIndexFundResult(1, principle1, false, 45, answer1);
    testIndexFundResult(1, principle20, false, 45, answer20);
    testIndexFundResult(1, principle100, false, 45, answer100);
    testIndexFundResult(1, principle500, false, 45, answer500);
}

function testRussel1000() {
    const principle1   = 1;
    const principle20  = 20;
    const principle100 = 100;
    const principle500 = 500;
    // accounting for inflation
    const answer1Inflation   = 48;
    const answer20Inflation  = 967;
    const answer100Inflation = 4833;
    const answer500Inflation = 24164;
    testIndexFundResult(2, principle1, true, 45, answer1Inflation);
    testIndexFundResult(2, principle20, true, 45, answer20Inflation);
    testIndexFundResult(2, principle100, true, 45, answer100Inflation);
    testIndexFundResult(2, principle500, true, 45, answer500Inflation);
    // not accounting for inflation
    const answer1   = 164;
    const answer20  = 3280;
    const answer100 = 16399;
    const answer500 = 81994;
    testIndexFundResult(2, principle1, false, 45, answer1);
    testIndexFundResult(2, principle20, false, 45, answer20);
    testIndexFundResult(2, principle100, false, 45, answer100);
    testIndexFundResult(2, principle500, false, 45, answer500);
}

testSnP500();
testNASDAQ();
testRussel1000();
testIndexFundResult(0, 50, false, 32, 1056);
testIndexFundResult(2, 42, true, 23, 305);
testIndexFundResult(1, 289347, false, 50, 202610315);