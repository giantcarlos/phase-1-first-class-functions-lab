const returnFirstTwoDrivers = function(array) {
    return array.slice(0, 2);
}

const returnLastTwoDrivers = function(array) {
    return array.slice(-2);
}

let selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(num1) {
    return function(num2) {
        return num1 * num2;
    }
}

function fareDoubler(num3) {
    return num3 * 2;
}

function fareTripler(num4) {
    return num4 * 3;
}

function selectDifferentDrivers(array, whichArray) {
    if (whichArray === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(array);
    }
    else if (whichArray === returnLastTwoDrivers) {
        return returnLastTwoDrivers(array);
    }
}