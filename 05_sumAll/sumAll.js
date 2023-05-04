const sumAll = function(first, second) {

    let sum = 0;

    if (!Number.isInteger(first) || !Number.isInteger(second) || first < 0 || second < 0){
        return 'ERROR'
    }

    let min = Math.min(first, second);
    let max = Math.max(first, second);

    for (min; min <= max; min++) {
        sum += min; 
    }

    return sum;

};

// Do not edit below this line
module.exports = sumAll;
