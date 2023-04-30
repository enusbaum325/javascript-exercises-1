const repeatString = function(inputString, numTimes) {
    let outputString = '';
    if (numTimes < 0) {
        return 'ERROR';
    }
    for (i = 0; i < numTimes; i++) {
        outputString += inputString;
    }
    return outputString;
};

// Do not edit below this line
module.exports = repeatString;
