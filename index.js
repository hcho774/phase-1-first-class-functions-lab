// Code your solution in this file!
const returnFirstTwoDrivers = function(arr) {
    return (arr.slice(0,2));
}

const returnLastTwoDrivers = function(arr) {
    return (arr.slice(-2));
}

console.log(returnLastTwoDrivers(["amy","cho","david"]));

const selectingDrivers = [
    returnFirstTwoDrivers, returnLastTwoDrivers
];

function createFareMultiplier(int) {
    return function(fare) {
        return int * fare;
    }
}


const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (arrayOfDrivers, func) {
    if (func === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(arrayOfDrivers);
    } else if (func === returnLastTwoDrivers) {
        return returnLastTwoDrivers(arrayOfDrivers);
    }
}

