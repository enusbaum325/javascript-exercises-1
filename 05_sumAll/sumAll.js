const sumAll = function(start, end) {
    let result = 0;
    if (Math.min(start,end) < 0) {
        return 'ERROR';
    }
    else if (typeof(start)!= 'number' || typeof(end)!= 'number') {
        return 'ERROR';
    }
    for (i = Math.min(start,end); i <= Math.max(start,end); i++) {
        result += i;
    }
    return result;
};

// Do not edit below this line
module.exports = sumAll;
