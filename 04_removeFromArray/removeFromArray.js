const removeFromArray = function(inputArray, ...otherArgs) {
    const outputArray = [];
    inputArray.forEach(element => {
        if(!otherArgs.includes(element)) {
            outputArray.push(element);
        }
    });
    return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
