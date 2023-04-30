const reverseString = function(inputString) {
    const inputArray = inputString.split('');
    const outputArray = [];
    for (i=inputArray.length - 1; i>=0; i--) {
        outputArray.push(inputArray[i]);
    }
    return outputArray.join('');
};

// Do not edit below this line
module.exports = reverseString;
