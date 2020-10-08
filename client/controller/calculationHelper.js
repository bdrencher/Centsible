/**************
 * $1
 * $20
 * $100
 * $500
 *************/
module.exports = {
    
}

function compoundInterestCalculator(principle, interestRate, timeInYears) {
    return principle * (1 + (interestRate/12))**(12 * timeInYears);
}

function testSnP500() {
    const principle1   = 1;
    const principle20  = 20;
    const principle100 = 100;
    const principle500 = 500;
    const answer1   = 22.12;
    const answer20  = 442.47;
    const answer100 = 2212.35;
    const answer500 = 11061.73;
    const result1   = compoundInterestCalculator(principle1, 7, 45);
    const result20  = compoundInterestCalculator(principle20, 7, 45);
    const result100 = compoundInterestCalculator(principle100, 7, 45);
    const result500 = compoundInterestCalculator(principle500, 7, 45);

    if (answer1 == result1) {
        console.log("test 1 passed!", result1);
    } else {
        console.log("test 1 failed!", result1);
    }

    if (answer20 == result20) {
        console.log("test 2 passed!", result20);
    } else {
        console.log("test 2 failed!", result20);
    }

    if (answer100 == result100) {
        console.log("test 3 passed!", result100);
    } else {
        console.log("test 3 failed!", result100);
    }

    if (answer500 == result500) {
        console.log("test 4 passed!", result500);
    } else {
        console.log("test 4 failed!", result500);
    }
}

testSnP500();