const repeatString = function(str, repetition) {

    if (repetition<0) {
        return "ERROR"
    }

    // starting cycle from 1 as we already have the string one time 
    let repeat = ""
  
    for (let i = 0; i < repetition; i++) {
        repeat += str;
      }
    return repeat;
};

// Do not edit below this line
module.exports = repeatString;
